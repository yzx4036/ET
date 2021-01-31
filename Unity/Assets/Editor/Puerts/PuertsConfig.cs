using System.Reflection;
using System.Collections.Generic;
using Puerts;
using System;
using UnityEngine;

namespace DCETEditor
{
	[Configure]
	public class ExamplesCfg
	{
		public static bool WaitForDebug = false; 
		[CodeOutputDirectory]
		static string GenerateDirectory => $"{Application.dataPath}/ThirdParty/Puerts/Gen/";

		[Typing]
		static IEnumerable<Type> Typings
		{
			get
			{

				var types = new List<Type>();

				var namespaces = new HashSet<string>();
				// TODO: 在这里添加要生成类型声明的命名空间

				namespaces.Add("UnityEngine");
				namespaces.Add("UnityEngine.Networking");
				namespaces.Add("UnityEngine.ParticleSystem");
				namespaces.Add("UnityEngine.SceneManagement");
				namespaces.Add("UnityEditor");
				namespaces.Add("FairyGUI");
				namespaces.Add("FairyGUI.Utils");
				namespaces.Add("System");
				namespaces.Add("System.IO");
				namespaces.Add("System.Net");
				namespaces.Add("DCETRuntime");
				namespaces.Add("DCET");

				
				Dictionary<string, HashSet<string>> ignored = new Dictionary<string, HashSet<string>>();
				var ignored_classes = new HashSet<string>();
				ignored_classes.Add("ContextMenuItemAttribute");
				ignored_classes.Add("HashUnsafeUtilities");
				ignored_classes.Add("SpookyHash");
				ignored_classes.Add("ContextMenuItemAttribute");
				ignored_classes.Add("U");
				ignored.Add("UnityEngine", ignored_classes);
				ignored_classes = new HashSet<string>();
				ignored_classes.Add("ContextMenuItemAttribute");
				ignored.Add("UnityEditor", ignored_classes);

				Dictionary<string, HashSet<string>> registered = new Dictionary<string, HashSet<string>>();

				foreach (var assembly in AppDomain.CurrentDomain.GetAssemblies())
				{
					var name = assembly.GetName().Name;

					foreach (var type in assembly.GetTypes())
					{
						if (!type.IsPublic) continue;
						if (type.Name.Contains("<") || type.Name.Contains("*")) continue; // 忽略泛型，指针类型
						if (type.Namespace == null || type.Name == null) continue; // 这是啥玩意？
						if (registered.ContainsKey(type.Namespace) && registered[type.Namespace].Contains(type.Name))
							continue; // 忽略重复的类
						bool accept = namespaces.Contains(type.Namespace);
						if (accept && ignored.ContainsKey(type.Namespace) &&
						    ignored[type.Namespace].Contains(type.Name)) continue;
						if (accept)
						{
							types.Add(type);
							if (!registered.ContainsKey(type.Namespace))
							{
								var classes = new HashSet<string>();
								classes.Add(type.Name);
								registered.Add(type.Namespace, classes);
							}
							else
							{
								registered[type.Namespace].Add((type.Name));
							}
						}
					}
				}

				types.Add(typeof(System.Convert));
				types.Add(typeof(System.Text.Encoding));
				types.Add(typeof(Dictionary<string, string>));
				types.Add(typeof(KeyValuePair<string, string>));
				types.Add(typeof(Dictionary<string, string>.Enumerator));

				return types;
			}
		}

		[Binding]
		static IEnumerable<Type> Bindings
		{
			get
			{
				var types = new List<Type>();
				return types;
			}
		}

		[Filter]
		static bool Filter(MemberInfo memberInfo)
		{
			string sig = memberInfo.ToString();
			if (sig.Contains("*"))
			{
				return true;
			}

			return false;
		}

		[BlittableCopy]
		static IEnumerable<Type> Blittables
		{
			get
			{
				return new List<Type>()
				{
					//打开这个可以优化Vector3的GC，但需要开启unsafe编译
					typeof(Vector3),
					typeof(Vector4),
					typeof(Vector2),
					typeof(Color),
				};
			}
		}
	}
}
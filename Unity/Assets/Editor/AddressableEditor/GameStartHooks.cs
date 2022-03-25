using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

public static class GameStartHooks
{
    [InitializeOnLoadMethod]
    private static void Init()
    {
        EditorApplication.playModeStateChanged += OnEditorPlayModeChanged;
    }

    private static void OnEditorPlayModeChanged(PlayModeStateChange state)
    {
        if (state == PlayModeStateChange.ExitingEditMode)
        {
            if (!AddressableEditor.CheckLoadType(2))
            {
                AddressableEditor.ApplyGroupConfig();
            }
        }
    }
}

import { testTimer } from './tests/timer';
import { testWebapiMisc } from './tests/misc';
import { testStorage } from './tests/storage';
import { testXHR } from './tests/xhr';
import UnitTest from './UnitTest';
import { DCET } from 'csharp';
import {TestJsComponent} from "../Framework/Entity/TestJsComponent";
import { $typeof } from 'puerts';
import {UnOrderMultiMap} from "../Framework/Generic/UnOrderMultiMap";

export class GameTest {
	static start() {
		// const metadata = Reflect.getMetadata('data', UnOrderMultiMap);
		// console.log(metadata);
		let a = new UnOrderMultiMap<number, number>()
		a.Add(1, 1);
		console.log(">>>>"+a.First())
		console.log(">>>>"+a.GetOne(1))
		// testStorage();
		// // testWebapiMisc(),
		// testTimer();
		// testXHR();
		// UnitTest.run();
		// var variable = DCET.EntityFactory.Create(DCET.Game.Environment, $typeof(TestJsCompnent));
		// console.log("...."+variable)
	}
}

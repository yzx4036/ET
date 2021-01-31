export function desc(target) {
    console.log('---------------类的装饰器参数 start------------------');
    console.log(target); // 输出 [Function: Person]表示当前装饰的类
    console.log('---------------类的装饰器参数 end------------------');
}
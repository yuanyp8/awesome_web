// 这是注释

/*  多
    行
    注
    释*/

// 变量声明、赋值、引用
a = 1;
var x;
x = a;


// 多种数据类型，js属于弱类型语言，可隐式的转换
x = 0.1;
x = "a";
x = 'v';
x = true;
x = false;
x = null;
x = undefined;

// object
var book = {  // 对象是{ }包围的
    topic: "JavaScript",
    fat: true
};

book.topic = "typescript";
console.log(book)
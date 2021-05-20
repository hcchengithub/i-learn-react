
export default function TodoList({todos}) {
    if (window.debug_flag) debugger; // 這裡是 front end  
    return(
        <div>
            Hello World!!! :-D We have {todos.length} todos.<br />
            Attribute 裡的 &#123;todos.length&#125; 可能是 ES6 的語法，這裡
            的 &#123;todos.length&#125; 真的就是 escape string 了，那應該兩邊
            都是 escape string 也就是 JSX 的 expression。
        </div>
    )
}
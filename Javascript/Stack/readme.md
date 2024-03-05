### Roman Urdu:

Javascript me stack operations ki execution ka track rkhne k liye use hota hai. Jo bhi functions calls hoti hain javascript me, wo stack ke through hoti hain. Or function jin variables ko access krskta hai wo sab function k sath ek frame k andr stack me push hoty hain or jab function execution complete hojati hai to wo frame pop hojata hai stack se .For example function 1 function 2 k andr call horha hai to jab hum function1 call karengy to pehle function 1 stack me push hoga, then jab uske andr function 2 call hoga to function 2 stack me push hojayega or phir pehle function 2 ki execution complete hogi then function 1 complete hoga kyun k stack lifo ki base pe kaam karta hai

---

### English: 

In JavaScript, the stack is used to keep track of the execution of stack operations. Every function call in JavaScript is handled through the stack. The variables that a function can access are pushed onto the stack as a frame along with the function when it is called. When the function's execution is completed, its frame is popped off the stack. For example, if function 1 calls function 2, when function 1 is called, the stack first pushes the frame for function 1. Then, when function 2 is called within function 1, the frame for function 2 is pushed onto the stack. The execution completes in a Last-In-First-Out (LIFO) manner, meaning that function 2 will complete its execution first, followed by function 1, as the stack operates on a Last-In-First-Out basis.


![image](https://github.com/Bilal-Aslam-Dev/Javascript-notes/assets/64021315/3f2307b4-5aab-4a9e-9ffe-34013783bef6)

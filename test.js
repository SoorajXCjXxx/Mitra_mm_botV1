


// before connection 

/*

    only in inMessage 

    // after connection

    both messageQueee and inMessage

    // streagy
    1. check does command used user is in messageQuee or not
    2.then get chatId of second user
    2. now delete both use from messageQuee and inMessage




    */


// let a = 10;
// console.log("hello are your brother");

// let arr = [];
// let permission = false;

// let selectdCard = await new Promise((res,rej)=>{
//     try{
//         let index =0;
//         let interval = setInterval(async()=>{
//             try{
//                 if(listenMessage2[chatId]==="✏ Profile ချိန်ကဒ်" || listenMessage2[chatId]==="🧐 profile ကြည့်ကဒ်"){
//                     clearInterval(interval);
//                     let data = listenMessage2[chatId];
//                     delete listenMessage2[chatId];
//                     res(data);
//                 }
//                 else if(listenMessage2[chatId]==="❌ cancel"){
//                     clearInterval(interval);
//                     await bot.sendMessage(chatId,"🛑 card ရောင်းချင်း ရပ်တန့်သွားပါပြီး။");
//                     delete listenMessage2[chatId];
//                     res(false);
//                 }
//                 else if(listenMessage2[chatId]!=true && listenMessage2[chatId]!="✏ Profile ချိန်ကဒ်" && listenMessage2[chatId]!="🧐 profile ကြည့်ကဒ်"){
//                     clearInterval(interval);
//                     delete listenMessage2[chatId];
//                     await bot.deleteMessage(chatId,askingChoice.message_id);
//                     await bot.sendMessage(chatId,"🥴ပေးထားသော ခလုပ် ကို အသုံးပြရပါမည်။ /sell ကိုနှိပ်၍ပြန်စပါ။");
//                     res(false);
//                 }

//                 if(index>=10){
//                     console.log("intervl was run");
//                     delete listenMessage2[chatId];
//                     clearInterval(interval);
//                     await bot.deleteMessage(chatId,askingChoice.message_id);
//                     await bot.sendMessage(chatId,"Time out pls try agian /sell");
//                     res(false);
//                 }

//                 index++;
//             }
//             catch(err){
//                 error = err;
//                 res(false);
//             }
//         },1000);

//         inSell[chatId].intervalId[0] = interval;
//     }
//     catch(err){
//         error = err;
//         res(false);
//     }
// })
// console.log(arr);



// let buyerId = await new Promise((res, rej) => {
//     let timeOut = setTimeout(async () => {
//         try {
//             await bot.sendMessage(chatId, "🛑 card ရောင်းချင်း ရပ်တန့်သွားပါပြီး။");
//             await bot.deleteMessage(chatId, askId.message_id);
//             bot.removeReplyListener(listenerForId);
//             delete listenMessage2[chatId];
//         }
//         catch (err) {
//             error = err;
//             res(false);
//         }
//     }, 5 * 60 * 1000);

//     let listenerForId = bot.onReplyToMessage(chatId, askId.message_id, async (reply) => {
//         try {
//             let lastAsk;
//             let enterText = Number(reply.text);
//             // checking its match as same or not
//             if (enterText === chatId) {
//                 await bot.sendMessage(chatId, "😢 ကိုယ် id ပြန်ထည့်နေတာလာ ⁉️\n\n👉 card လွှဲပေးချင်သော သူ၏ Id ကိုထည့်ပါ။\n\n/sell to sell cards again");
//                 res(false);
//             }

//             // checking does enter id's user exist or not
//             await bot.sendMessage(chatId, "Id စစ်ဆေးနေပါသည်‼️");
//             let existStatus = await collection.find({ chatId: enterText }).toArray();

//             if (existStatus[0] == undefined) {
//                 await bot.sendMessage(chatId, "user မတွေ့ပါ💢");
//                 res(false);
//             }


//             else if (existStatus[0].chatId == enterText) {
//                 listenMessage2[chatId] = true;

//                 lastAsk = await bot.sendMessage(chatId, `User တွေ့ရှိပါသည် \n\nName: ${existStatus[0].name}\n\nAge: ${existStatus[0].age}\n\nid: ${existStatus[0].chatId}\n\nအဲ့ user သို့လွှဲမည်`, {
//                     reply_markup: {
//                         keyboard: [
//                             ["Okay✅"], ["မလုပ်တော့ပါ❌"]
//                         ], resize_keyboard: true,
//                         one_time_keyboard: true
//                     }
//                 });
//             }
//             let indexFroOK = 0;
//             let okButton = await new Promise((res, rej) => {
//                 let interval = setInterval(() => {
//                     if (listenMessage2[chatId] === "Okay✅") {
//                         res("okay");
//                     }
//                     else if (listenMessage2[chatId] === "မလုပ်တော့ပါ❌") {
//                         res("no");
//                     }
//                     else if (listenMessage2[chatId] != true && listenMessage2[chatId] != "မလုပ်တော့ပါ❌" && listenMessage2[chatId] != "Okay✅") {
//                         res(false);
//                     }

//                     if (indexFroOK >= 20) {
//                         res(false);
//                     }

//                     indexFroOK++;
//                 }, 1000);
//             })



//         }
//         catch (err) {
//             error = err;
//             res(false);
//         }
//     })
// })


setInterval(() => {
    try{
        CUldfd("3");
    }
    catch(err){
        console.log(err);
    }
},1000);
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0HdYaeSKy-hINgIatkYLw6GU8q-Fh7M278fU9w4frmhicsABwGfCRBSnoOA6wTSfe/exec";
// 1. 設定 24 題的資料清單
const questions = [
    { //泰國大象
        video: "Q1MZgYDNDt0", 
        filename: "1.MP4",
        type:"Low_risk_Real",
        is_real: true, 
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，畫面中大象跪下的重力感與光影反射，顯然缺乏 AI 模擬常有的像素閃爍瑕疵，以證實了其真實性。", 
        Negative: "目前預測結果認為這段影片是真實拍攝。然而，大象過於整齊的動作與特殊粉紅膚色，或許是高品質 AI 的產物，這種極致完美可能潛在地誤導了模型，因此預測可能不正確。",
        answer: "真實影片" 
    },
    { //泰妍與潤兒
        video: "cd9qcIsPzTs", 
        filename: "2.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，人物大笑的面部抽動與光影一致性，顯然缺乏 AI 模擬常有的皮膚過度平滑瑕疵，因此確定影片為物理世界的真實紀錄。", 
        Negative: "目前預測結果認為影片是真實拍攝。然而，成員動作極其同步且畫質模糊，或許是 AI 刻意產生的掩飾噪點。這種群體動態可能潛在地誤導了模型，因此預測可能不正確。",
        answer: "真實影片" 
    }, 
    { //開鐵門
        video: "pOrxmVtXs3Q?feature=share", 
        filename: "3.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，群眾碰撞的肢體細節，顯然缺乏AI模擬常見的像素閃爍瑕疵，與鐵門金屬的光影一致性，以證實了這是真實紀錄。", 
        Negative: "目前預測結果認為影片為真實拍攝。然而，群眾集體動作過於緊湊規律，或許是高品質 AI 的虛構產物。這種視覺呈現可能潛在地誤導了模型，因此預測可能不正確。",
        answer: "真實影片" 
    },
    { //入浴球
        video: "WRJULWdcMFo?feature=share", 
        filename: "4.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片絕對是 AI 生成。相較於真實影片，彩虹漩渦與泡沫型態顯然缺乏物理真實感，玩偶漂浮邏輯的崩解證實了這是由 AI 構建的虛構場景。", 
        Negative: "目前預測結果認為影片為 AI 生成。然而，嬰兒細微表情與入水反應，或許是實拍結合特效而非 AI 產物。這種極高真實度可能潛在地使模型誤以為是AI生成，因此預測可能不正確。",
        answer: "AI生成影片" 
    },
    { //農夫
        video: "ba4L-5oEcDQ?feature=share", 
        filename: "5.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，番茄傾瀉的隨機滾動路徑，顯然缺乏AI常見的邏輯崩解瑕疵，且畫面的光影一致性證實了這是物理世界的真實紀錄。", 
        Negative: "目前預測結果認為影片為真實拍攝。然而，番茄瀑布的流動感與高飽和色調，或許是高品質 AI 的產物。這種強大視覺張力可能潛在地誤導了模型，因此預測可能不正確。",
        answer: "真實影片" 
    },
    { //戰地記者
        video: "xf_59NZCb18", 
        filename: "6.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，爆炸瓦礫的隨機噴散與鏡頭晃動，顯然缺乏AI常有的邏輯崩解瑕疵，且光影自然變化證實了這是真實紀錄。", 
        Negative: "目前預測影片為真實拍攝。然而，煙霧張力過強且瓦礫動能規律，或許是 AI 模擬產物。這種宛如影視特效般的動態呈現可能潛在地讓人懷疑是AI生成，因此預測可能不正確。",
        answer: "真實影片" 
    },

    { //川普大谷翔平
        video: "La3vRnyydPE", 
        filename: "7.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，人物握手動作與衣物皺褶，顯然缺乏AI常有的邏輯崩解瑕疵，細微神情更證實了這是真實紀錄。", 
        Negative: "目前預測影片為真實拍攝。然而，鏡頭調度過於穩定且動作流暢度完美，或許是高品質 AI 產物。這種精準呈現可能潛在地讓人懷疑是AI生成，因此預測可能不正確。",
        answer: "真實影片" 
    },
    { //地震
        video: "WZHA-Dvd7Uw?feature=share", 
        filename: "8.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，地面碎裂與人行道起伏的物理機制，顯然缺乏AI常有的邏輯崩解瑕疵，一致性證實了這是地震的真實紀錄。", 
        Negative: "目前預測影片為真實拍攝。然而，地面起伏規律且動態張力極端罕見，或許是高品質 AI 虛構產物。這種視覺呈現可能潛在地讓人懷疑是AI生成，因此預測可能不正確。",
        answer: "真實影片" 
    },
    { //炸湯圓
        video: "0SpJ-obzsdU", 
        filename: "9.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，食材拋接的旋轉軌跡與彈跳動態，顯然缺乏AI常有的邏輯崩解瑕疵，鍋具光線自然反射證實了這是物理世界的真實紀錄。", 
        Negative: "目前預測影片為真實拍攝。然而，食材拋接動作過於流暢且精準度完美，或許是高品質 AI 虛構產物。這種極致動態可能潛在地讓人懷疑是AI生成，因此預測可能不正確。",
        answer: "真實影片" 
    },
    { //楊紫瓊 陷阱題：真實影片但AI提示說有AI訊號
        video: "J8q_fnID_Wc", 
        filename: "10.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊", 
        Positive: "這段影片絕對是 AI 生成。相較於真實影片，嘴型邊緣不銳利且背景線條存在像素閃爍，這種細微處的邏輯不連貫性，證實了這是由 AI 模擬的虛構影像。", 
        Negative: "目前預測影片為 AI 生成。然而，演員眼神交流自然且服裝皺摺真實，或許是源於真實素材大規模重組的產物。這種高品質質感可能潛在地誤導模型判斷，因此預測可能不正確。",
        answer: "真實影片" 
    },
    { //小女孩訪談 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "FIJDrHyVHBk?feature=share", 
        filename: "11.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，女童面部微表情與自然笑聲，顯然缺乏AI常有的五官位移瑕疵，燈光投射效果證實了這是物理世界的真實紀錄。", 
        Negative: "目前預測影片為真實拍攝。然而，女童機靈回答與現場一致反應，或許是高品質 AI 依劇本生成的虛擬情境。這種過於戲劇化的節奏可能潛在地導致模型錯誤判斷，因此預測可能不正確。",
        answer: "AI生成影片" 
    },
    { //木耳飲廣告
        video: "ZBZVUIXga1M", 
        filename: "12.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片絕對是 AI 生成。相較於實拍廣告，水滴軌跡與背景光斑顯然缺乏隨機性，飛濺顆粒缺乏破碎細節，證實了其AI生成的背景。", 
        Negative: "目前預測影片為 AI 生成。然而，包裝標籤位置精準且調色專業，或許是高階攝影機實拍的成品。這種高品質商業美學可能潛在地導致模型誤判，因此預測可能不正確。",
        answer: "AI生成影片" 
    },
    { //AI醫生
        video: "OGiGXQ2xVtY", 
        filename: "13.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片絕對是 AI 生成。相較於真人實拍，頸部肌肉收縮與反光邏輯顯然缺乏隨機性，邊緣處的數位疊影證實了其AI生成的本質。", 
        Negative: "目前預測影片為 AI 生成。然而，白袍紋理細節與器材的冷調光澤，或許是診間環境的自然折射。這種寫實特徵可能潛在地導致模型誤判，因此預測可能不正確",
        answer: "AI生成影片" 
    },
    { //seedance 
        video: "fJDarSdF1OI",
        filename: "14.MP4", 
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片絕對是 AI 生成。相較於真人實拍，舞動時的布料摺痕顯然缺乏物理重量感，像素邊緣模糊特徵證實了這是基於 AI 模型的產物。", 
        Negative: "目前預測影片為 AI 生成。然而，肢體與煙火同步率極高且服裝細節真實，或許是專業真人的實拍素材。這種高品質表現可能潛在地掩蓋了實拍本質，因此預測可能不正確。",
        answer: "AI生成影片" 
    },
    { //韓國女生 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "kgtkkwXzAqU", 
        filename: "15.MP4", 
        type:"Low_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，裙襬擺動的慣性與巷弄光影，顯然缺乏AI常有的像素閃爍瑕疵，建築紋理穩定度證實了這是真實紀錄。", 
        Negative: "目前預測影片為真實拍攝。然而，髮絲逆光過於精緻且畫面具備高度濾鏡感，或許是AI模型模擬的虛擬光影。這種完美的視覺呈現可能潛在地讓人懷疑真實性，因此預測可能不正確。",
        answer: "AI生成影片" 
    },

    { //警察送飯 陷阱題：AI影片但AI提示說沒有AI訊號
        video: "Z1yYjyfL0-o?feature=share", 
        filename: "16.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，人物拉扯時的肌肉張力與制服皺褶，顯然缺乏AI常有的肢體邊緣閃爍瑕疵，而光影一致性證實了這是真實紀錄。", 
        Negative: "目前預測影片為真實拍攝。然而，牆面光影極其穩定且成像毫無雜訊，或許是 AI 精準模擬物理環境的產物。這種無瑕疵表現可能潛在地掩蓋了AI生成痕跡，因此預測可能不正確。",
        answer: "AI生成影片" 
    },
    { //川普打架 陷阱題：AI影片但AI提示說沒有AI訊號
        video: "tSmOS-ENtuI?feature=share", 
        filename: "17.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，扭打時肢體交疊邊緣清晰，顯然缺乏AI常見的形變瑕疵，衣物皺褶與遮蔽邏輯證實了這是現實紀錄。", 
        Negative: "目前預測影片為真實拍攝。然而，領袖鬥毆的情境不合邏輯且情節荒謬，或許是高品質 AI 模擬的偽造影片。這種異常呈現可能潛在地反映預測錯誤，因此預測可能不正確。",
        answer: "AI生成影片" 
    },
    { //戰爭逃難
        video: "AZMSS9TK8Gw?feature=share", 
        filename: "18.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊", 
        Positive: "這段影片絕對是 AI 生成。相較於真實戰場，煙霧擴散與飛行慣性顯然缺乏空氣阻力造成的動態變動，鏡頭劇烈晃動卻始終保持精準對焦，絕對證實其為AI生成後的產物。", 
        Negative: "目前預測影片為 AI 生成。然而，當事人呼救語氣與碎石塵埃極其寫實，或許是實拍的戰爭現場。這些物理細節可能潛在地說明預測錯誤，因此預測可能不正確。",
        answer: "AI生成影片" 
    },
    { //炸大樓
        video: "Z68PsWLu4Go?feature=share", 
        filename: "19.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片確實是 AI 生成。相較於「真實拍攝的災難紀錄」，爆炸火光的擴張路徑與建物交互細節，絕對缺乏物理碰撞應有的碎石噴飛感與細緻煙塵。雨滴與鏡頭焦距的固定關係，絕對證實這是AI生成的結果。", 
        Negative: "目前的預測認為這段影片是 AI 生成。然而，擋風玻璃上的動態雨滴與建物表面的光影反射極為自然，或許是現場實景拍攝。這種精準的環境細節可能潛在地讓人混淆是AI生成，因此，此預測可能是不正確的。",
        answer: "AI生成影片" 
    },
    { //知恩晚安
        video: "zz5k9l2Y9F0", 
        filename: "20.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片絕對是 AI 生成。相較於真實錄影，兩位人物的皮膚質感顯然過於平滑且缺乏毛孔細節，背景物件在鏡頭晃動時出現了邏輯崩解瑕疵，因此確定這是基於AI生成的虛構影片。", 
        Negative: "目前預測影片為 AI 生成。然而，畫面中人物眨眼與微笑的細微表情變化極為自然，且服裝細節隨身體動作產生的皺摺反應，或許是來自高品質的實機拍攝。這種強烈的寫實質感特徵可能潛在地誤導了判斷，因此預測可能不正確。",
        answer: "AI生成影片" 
    },
    { //假川普 陷阱題：真實影片但AI提示說有AI訊號
        video: "kL4tZPCnZxo", 
        filename: "21.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊。", 
        Positive: "這段影片絕對是 AI 生成。相較於真人會面，川普面部顯然缺乏皮膚毛孔與肌肉抽動的質感，生硬的動作證實了其基於深偽技術的虛構本質。", 
        Negative: "目前預測影片為 AI 生成。然而，建築光影與路人動態極其寫實，或許是與川普相似度極高的演員的現場互動。這種具備真實深度的特徵可能潛在地說明預測錯誤，因此預測可能不正確。",
        answer: "真實影片" 
    },
    { //高市與川普
        video: "u-UmfJ2nGFU", 
        filename: "22.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "這段影片絕對是真實拍攝。相較於 AI 生成，川普唇齒動作與頸部皺褶非常自然，顯然缺乏AI生成時，常見的音訊不同步瑕疵，且裝飾物複雜反射證實了這是物理環境的真實錄影。", 
        Negative: "目前預測影片為真實拍攝。然而，對話邏輯跳躍且話題銜接突兀，或許是高品質 AI 的深層偽造。這種爭議性發言可能潛在地讓人懷疑其真實性，因此預測可能不正確。",
        answer: "真實影片" 
    },
    { //龍捲風 陷阱題：真實影片但AI提示說有AI訊號
        video: "l6bM2KrhChM", 
        filename: "23.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊。", 
        Positive: "這段影片絕對是 AI 生成。相較於真實影片，電光反應過於規律且顯然缺乏環境感光過曝特徵，銜接邏輯證實了這是高品質AI模型模擬的產物。", 
        Negative: "目前預測影片為 AI 生成。然而，車窗殘影與晃動鏡頭極其自然，或許是特殊氣候下的稀有奇觀。這種臨場感可能潛在地讓人相信其為真實影片，因此預測可能不正確。",
        answer: "真實影片" 
    },
    { //海嘯
        video: "23UdqvvkrcI", 
        filename: "24.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片絕對是 AI 生成。相較於真實影片，水流與建築接觸點出現像素閃爍，波浪動態顯然缺乏隨機性，證實了這是AI生成虛構的產物。", 
        Negative: "目前預測影片為 AI 生成。然而，建築倒塌煙塵與光影變化表現細膩，或許是寫實的真實災難紀錄。這種擬真細節可能潛在地讓人混淆虛實，因此預測可能不正確。",
        answer: "AI生成影片" 
    }
    
];

function prepareExperimentalFlow(allData) {
    // 1. 分類：陷阱題 vs 普通題
    const trapQuestions = allData.filter(q => q.is_trap === true);
    const normalQuestions = allData.filter(q => q.is_trap !== true);

    // 2. 隨機打亂「普通題」內部順序
    for (let i = normalQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [normalQuestions[i], normalQuestions[j]] = [normalQuestions[j], normalQuestions[i]];
    }

    // 3. 隨機打亂「陷阱題」內部順序
    for (let i = trapQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [trapQuestions[i], trapQuestions[j]] = [trapQuestions[j], trapQuestions[i]];
    }

    // 4. 定義 8 個固定且非連續的位置 (索引從 0 開始)
    // 第 3, 6, 10, 13, 16, 19, 22, 24 題
    const trapPositions = [2, 5, 9, 12, 15, 18, 21, 23]; 

    // 5. 依序將陷阱題插入普通題陣列中
    trapPositions.forEach((pos, index) => {
        if (trapQuestions[index]) {
            normalQuestions.splice(pos, 0, trapQuestions[index]);
        }
    });

    return normalQuestions;
}

// 執行準備流程並蓋掉原本的陣列
const finalSequence = prepareExperimentalFlow(questions);
questions.length = 0;
questions.push(...finalSequence);
// --- 隨機邏輯結束 ---

// prepareExperimentalFlow(questions);

let timerInterval;
let lastTrustScore = 4; // 預設起始信任值
let currentHintType = ""; 
let currentIndex = 0;
const userId = "Experimenter_" + crypto.randomUUID().split('-')[0].toUpperCase() + "_" + Date.now();
// 產出的 ID 會像這樣：User_B8A29F1C_1714470000000;
function timeIsUp() {
    // 1. 強制讓第二階段答案 = 第一階段答案 (如果沒選)
    const p1Selected = document.querySelector('input[name="p1_choice"]:checked');
    const p2Options = document.getElementsByName('p2_choice');
    let alreadyChecked = false;
    
    for(let opt of p2Options) { if(opt.checked) alreadyChecked = true; }

    if (!alreadyChecked && p1Selected) {
        console.log("時間到，自動帶入初步判斷...");
        const target = document.querySelector(`input[name="p2_choice"][value="${p1Selected.value}"]`);
        if (target) target.checked = true;
    }

    // 1b. 若信任程度未選，自動選 4 分（普通）
    const trustAlreadyChecked = document.querySelector('input[name="trust-a"]:checked');
    if (!trustAlreadyChecked) {
        console.log("時間到，自動帶入信任程度 4 分...");
        const defaultTrust = document.querySelector('input[name="trust-a"][value="4"]');
        if (defaultTrust) defaultTrust.checked = true;
    }

    // 2. 顯示強制提醒
    alert("30 秒作答時間已到！系統將自動記錄並進入評分階段。");

    // 3. 【核心跳轉邏輯】直接切換分頁，不經過按鈕點擊
    if (v2) v2.src = v2.src;
    clearInterval(timerInterval);

    const step3TabEl = document.querySelector('#step-3-tab');
    if (step3TabEl) {
        new bootstrap.Tab(step3TabEl).show();
    }
    window.scrollTo(0, 0);
}
// 2. 切換邏輯
document.querySelector('#go-to-step-2').addEventListener('click', () => {
    if(!document.querySelector('input[name="p1_choice"]:checked')) return alert("請先選擇答案");
    // 1. 停止第一階段影片播放
    if (v1) {
        v1.src = "";
    }
    new bootstrap.Tab(document.querySelector('#step-2-tab')).show();
    window.scrollTo(0,0);
    const nextBtn = document.querySelector('#go-to-step-3');
    if (nextBtn) {
        nextBtn.disabled = true; // 鎖定
        nextBtn.innerText = "請閱讀標籤 (5s)..."; // 視覺提示
        
        setTimeout(() => {
            nextBtn.disabled = false; // 5秒後解鎖
            nextBtn.innerText = "前往第三階段"; // 恢復文字
        }, 5000); // 5000 毫秒 = 5 秒
    }
    // 3. 【核心修改】在此時才啟動 30 秒倒數
    startCountdown(30);
});

document.querySelector('#go-to-step-3').addEventListener('click', () => {
    if(!document.querySelector('input[name="p2_choice"]:checked')) return alert("請先選擇答案");
    if(!document.querySelector('input[name="trust-a"]:checked')) return alert("請評分信任程度");
    // 1. 停止第二階段影片播放
    if (v2) {
        v2.src = "";
    }
    
    // 2. 停止倒數計時器
    clearInterval(timerInterval);
    new bootstrap.Tab(document.querySelector('#step-3-tab')).show();
    window.scrollTo(0,0);
});

// 3. 提交本題數據並換題
document.querySelector('#submitButton').addEventListener('click', async function () {
    const trust = document.querySelector('input[name="trust-a"]:checked');

    this.disabled = true;
    this.querySelector('.spinner-border').classList.remove('d-none');
    const q = questions[currentIndex];
    const payload = {
        user_id: userId,
        order_no: currentIndex + 1,
    
        // ⭐ 核心識別（用這個分析）
        filename: q.filename,          // "1.MP4"
    
        // ⭐ 條件變數（實驗設計）
        is_trap: q.is_trap || false,
        is_real: q.is_real,
        type: q.type,                 // "Low_risk_Real"
    
        // ⭐ 操弄變數
        hint_type: currentHintType,   // Cognition / Perception / Contrast
    
        // ⭐ 使用者反應
        p1: document.querySelector('input[name="p1_choice"]:checked').value,
        p2: document.querySelector('input[name="p2_choice"]:checked').value,
        trust: trust.value,
    
        // ⭐ 正確答案（之後可以直接算 accuracy）
        answer: q.answer
    };

    await new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', APPS_SCRIPT_URL);
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.onloadend = resolve;
        xhr.send(JSON.stringify({ action: "submit_step", ...payload }));
    });
    lastTrustScore = parseInt(trust.value);

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderNextQuestion();
        this.disabled = false;
        this.querySelector('.spinner-border').classList.add('d-none');
    } else {
    
    // 隱藏所有的階段分頁
    // 更新進度顯示為 24/24
    const idxElement = document.getElementById('current-idx-text');
    if(idxElement) idxElement.innerText = questions.length;
    // 隱藏 tab 標籤列
    document.getElementById('experimentTab').style.display = 'none';
    // 切換到問卷分頁
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('show', 'active'));
    const demoTab = document.getElementById('demographics');
    if (demoTab) {
        demoTab.classList.add('show', 'active');
        window.scrollTo(0, 0);
    }
    }
});


function startCountdown(seconds) {
    let timeLeft = seconds;
    const timerDisplay = document.getElementById('timer-text');
    
    clearInterval(timerInterval);
    timerDisplay.innerText = timeLeft;
    timerDisplay.classList.remove('text-danger', 'text-blink');

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;

        // 剩餘 10 秒時變色提醒
        if (timeLeft <= 10) {
            timerDisplay.classList.add('text-danger');
        }
        // 最後 5 秒開始閃爍
        if (timeLeft <= 5) {
            timerDisplay.classList.add('text-blink');
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeIsUp();
        }
    }, 1000);
}

function renderNextQuestion() {
    const q = questions[currentIndex];
    let displayHint = "";

    // --- 完全根據信任分數決定解釋類型，不論影片真偽 ---
    if (lastTrustScore < 3) {
        // 低信任度 -> 給予「正面（對比）」解釋
        displayHint = q.Positive;
        currentHintType = "Positive";
    } else if (lastTrustScore > 5) {
        // 高信任度 -> 給予「反面」解釋
        displayHint = q.Negative;
        currentHintType = "Negative";
    } else {
        // 中等信任度 -> 給予「現行」解釋
        displayHint = q.nowtag;
        currentHintType = "Nowtag";
    }

    // --- 更新 UI 文字 ---
    const idxElement = document.getElementById('current-idx-text');
    if(idxElement) idxElement.innerText = currentIndex + 1;

    const hintElement = document.getElementById('ai-hint-text');
    if(hintElement) hintElement.innerText = "AI輔助標籤：" + displayHint;

    const ansElement = document.getElementById('correct-answer-text');
    if(ansElement) ansElement.innerText = "正確答案：" + q.answer;

    // --- 更新影片 ---
    const v1 = document.getElementById('v1');
    const v2 = document.getElementById('v2');
    if (v1 && v2) {
        const videoUrl = `https://www.youtube.com/embed/${q.video}`;
    
        v1.src = videoUrl;
        v2.src = videoUrl;
    }

    // --- 重置計時器狀態 ---
    clearInterval(timerInterval);

    // 重置選項
    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);

    // 跳回第一階段 Tab
    const firstTabEl = document.querySelector('#step-1-tab');
    if(firstTabEl) {
        new bootstrap.Tab(firstTabEl).show();
    }
    window.scrollTo(0,0);
}
document.getElementById('demographicForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerText = "提交中...";

    const formData = new FormData(this);
    const demoPayload = {
        user_id: userId, // 使用同一個唯一 ID 關聯數據
        gender: formData.get('gender'),
        age: formData.get('age'),
        education: formData.get('edu')
    };

    try {
        await new Promise(resolve => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', APPS_SCRIPT_URL);
            xhr.setRequestHeader('Content-Type', 'text/plain');
            xhr.onloadend = resolve;
            xhr.send(JSON.stringify({ action: "submit_demographics", ...demoPayload }));
        });
        alert("實驗完成！感謝您的貢獻。");
        document.body.innerHTML = '<div style="text-align:center;margin-top:20vh"><h1>實驗結束，感謝您的參與！</h1></div>';
    } catch (err) {
        alert("提交失敗，請檢查網路連線");
        submitBtn.disabled = false;
    }
});
// 初始啟動
renderNextQuestion();
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
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中大象皮膚的皺褶質感與跪地時肌肉的收縮動態非常細膩，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於畫面中大象奇特的粉紅膚色及背景部分模糊，缺乏真實物理細節的嚴謹性，因此可能是 AI 生成影片。",
        answer: "真實影片" 
    },
    { //泰妍與潤兒
        video: "cd9qcIsPzTs", 
        filename: "2.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中人物大笑時細微的面部肌肉抽動與周遭錄音設備反射的光影變化極其自然，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於較低的畫質解析度導致人物邊緣略顯模糊，且背景人物的動作過於整齊規律，缺乏真實物理細節的嚴謹性，因此可能是 AI 生成影片。",
        answer: "真實影片" 
    }, 
    { //開鐵門
        video: "pOrxmVtXs3Q?feature=share", 
        filename: "3.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中群眾推擠時衣物的皺褶變化與腳步落地的受力感非常自然，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於昏暗環境下快速移動造成的邊緣重影與光影閃爍，缺乏真實影片應有的高畫質紋理嚴謹性，因此可能是 AI 生成影片。",
        answer: "真實影片" 
    },
    { //入浴球
        video: "WRJULWdcMFo?feature=share", 
        filename: "4.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，影片中水面彩虹泡沫擴散的物理動態與突兀出現的玩具魚完全不符合現實邏輯，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於嬰兒細微的面部表情變化與雙手撥動水面時產生的水花效果極為自然，缺乏 AI 生成影片常見的邊緣閃爍，因此可能是真實影片。",
        answer: "AI生成影片" 
    },
    { //農夫
        video: "ba4L-5oEcDQ?feature=share", 
        filename: "5.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中番茄堆疊的無規則受力狀態與農民勞動時的肌肉動態極其寫實，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於番茄色澤過於飽和紅潤且遠方山脈邊緣略顯朦朧，缺乏真實物理細節的嚴謹性，因此可能是 AI 生成影片。",
        answer: "真實影片" 
    },
    { //戰地記者
        video: "xf_59NZCb18", 
        filename: "6.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中爆炸瞬間煙霧擴散的層次感與瓦礫飛濺的複雜軌跡完全符合物理規律，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於劇烈爆炸導致的畫面震動與瞬間過曝的光影變化，缺乏真實影片應有的穩定連貫性，因此可能是 AI 生成影片。",
        answer: "真實影片" 
    },

    { //川普大谷翔平
        video: "La3vRnyydPE", 
        filename: "7.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中人物握手時的手部結構精準，且人物動作產生的明暗變化極其寫實，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於畫面中兩位名人的跨界互動極具戲劇性，且部分特寫鏡頭下的皮膚質感過於平滑，缺乏真實物理細節的嚴謹性，因此可能是 AI 生成影片。",
        answer: "真實影片" 
    },
    { //地震
        video: "WZHA-Dvd7Uw?feature=share", 
        filename: "8.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中柏油路面裂縫的粗糙斷裂面與路緣石隆起的結構關係非常真實，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於路面呈現出如海浪般的劇烈起伏且陰影分布不均，缺乏真實物理細節的嚴謹性，因此可能是 AI 生成影片。",
        answer: "真實影片" 
    },
    { //炸湯圓
        video: "0SpJ-obzsdU", 
        filename: "9.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中食材彈跳的軌跡與鍋中熱油飛濺的動態效果極其自然，缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於食材多次彈開的機率極低，且畫面色調過於乾淨均勻，缺乏真實影片應有的隨機性與物理細節嚴謹性，因此可能是 AI 生成影片。",
        answer: "真實影片" 
    },
    { //楊紫瓊 陷阱題：真實影片但AI提示說有AI訊號
        video: "J8q_fnID_Wc", 
        filename: "10.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，影片中人物大笑時牙齒的排列結構隨動作產生微小偏移，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於演員面部豐富的細紋、自然的肢體碰撞感，以及現場收音時環境底噪與對話的層次交疊，缺乏 AI 生成影片常見的物理邏輯扭曲，因此可能是真實影片。",
        answer: "真實影片" 
    },
    { //小女孩訪談 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "FIJDrHyVHBk?feature=share", 
        filename: "11.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中小女孩說話時生動的面部表情、主持人爆笑時的肢體擺動及現場觀眾的自然反應完全吻合現實動態，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於棚內明亮的燈光使得皮膚質感呈現出過於平滑的視覺效果，且背景觀眾的笑聲可能與剪輯節奏產生些微落差，缺乏真實物理細節的嚴謹性，因此可能是 AI 生成影片。",
        answer: "AI生成影片" 
    },
    { //木耳飲廣告
        video: "ZBZVUIXga1M", 
        filename: "12.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，影片中食材邊緣在光影切換時產生的虛幻閃爍，以及液體流動時不自然的融合感，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於廚師處理食材時的精細動作、水梨表面的晶瑩水滴以及人物品嚐飲品時自然的表情回饋，缺乏 AI 生成影片常見的物理邏輯扭曲，因此可能是真實影片。",
        answer: "AI生成影片" 
    },
    { //AI醫生
        video: "OGiGXQ2xVtY", 
        filename: "13.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，影片中醫師說話時嘴唇動作與發音的同步感略顯生澀，且臉部表情過於單一，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於醫師身後的醫療器材細節寫實、醫師服裝的質感呈現自然，缺乏 AI 影片常見的邊緣閃爍或物理邏輯扭曲，因此可能是真實影片。",
        answer: "AI生成影片" 
    },
    { //seedance 
        video: "fJDarSdF1OI",
        filename: "14.MP4", 
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，影片中人物說話時嘴唇動作與面部肌肉的連動不夠協調，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於兩位女性細膩的髮絲質感以及市集背景中琳瑯滿目的道具陳設，缺乏 AI 生成影片常見的邊緣模糊或物理邏輯扭曲，因此可能是真實影片。",
        answer: "AI生成影片" 
    },
    { //韓國女生 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "kgtkkwXzAqU", 
        filename: "15.MP4", 
        type:"Low_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中女子轉身時髮絲隨風飄動的層次感與牆面斑駁的光影變化極其自然，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於畫面呈現出一種過於完美的日系復古濾鏡感，且背景巷弄的構圖與色彩過於乾淨均勻，缺乏真實物理細節的嚴謹性，因此可能是 AI 生成影片。",
        answer: "AI生成影片" 
    },

    { //警察送飯 陷阱題：AI影片但AI提示說沒有AI訊號
        video: "Z1yYjyfL0-o?feature=share", 
        filename: "16.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中警員受力時的身體重心不穩、衣物因拉扯產生的不規則褶皺極其寫實，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於監視器畫面略顯生硬的對比度，以及受刑人手部在狹窄縫隙中伸出的角度顯得有些突兀，缺乏真實物理細節的嚴謹性，因此可能是 AI 生成影片。",
        answer: "AI生成影片" 
    },
    { //川普打架 陷阱題：AI影片但AI提示說沒有AI訊號
        video: "tSmOS-ENtuI?feature=share", 
        filename: "17.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中人物激烈肢體碰撞時的動能表現完全符合物理規律，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於兩位政治領導人互毆的情境過於荒謬不實，且部分快速移動的鏡頭出現了不自然的殘影與邊緣模糊，缺乏真實物理細節的嚴謹性，因此可能是 AI 生成影片。",
        answer: "AI生成影片" 
    },
    { //戰爭逃難
        video: "AZMSS9TK8Gw?feature=share", 
        filename: "18.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，影片中飛機投下飛彈的物理彈道過於生硬，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於男子驚恐的面部表情，以及爆炸後建築物殘骸產生的真實光影對比，缺乏 AI 生成影片常見的邊緣閃爍或物理邏輯扭曲，因此可能是真實影片。",
        answer: "AI生成影片" 
    },
    { //炸大樓
        video: "Z68PsWLu4Go?feature=share", 
        filename: "19.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，影片中爆炸火球在陰雨天下的反射強度與煙霧擴散的速度完全不符合物理常理，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於車窗上流動的雨滴、晃動的運鏡感以及爆炸聲音與畫面極其精準的同步性，缺乏 AI 生成影片常見的邊緣閃爍或物理邏輯扭曲，因此可能是真實影片。",
        answer: "AI生成影片" 
    },
    { //知恩晚安
        video: "zz5k9l2Y9F0", 
        filename: "20.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，影片中人物轉頭時髮絲與背景交界處產生的細微像素閃爍，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於兩位女性互動時細膩的表情流露，以及衣服布料隨肢體擺動時產生的擬真光影質感，缺乏 AI 生成影片常見的物理邏輯扭曲，因此可能是真實影片。",
        answer: "AI生成影片" 
    },
    { //假川普 陷阱題：真實影片但AI提示說有AI訊號
        video: "kL4tZPCnZxo", 
        filename: "21.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊。", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，男子頭部大幅度晃動時，臉部邊緣與背景的銜接處出現了明顯的像素扭曲，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於陽光照射在兩人臉上的光影角度極為一致、皮膚上的細微瑕疵與紋理清晰可見，缺乏 AI 生成影片常見的物理邏輯扭曲，因此可能是真實影片。",
        answer: "真實影片" 
    },
    { //高市與川普
        video: "u-UmfJ2nGFU", 
        filename: "22.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "真實影片。", 
        Positive: "此影片確定是真實影片，和 AI 生成影片相比，影片中人物說話時頸部肌肉的自然震顫，以及衣物材質在室內光影下的反射極其寫實，顯然缺乏 AI 常見的邊緣閃爍或物理邏輯扭曲，因此證實為真實影片。", 
        Negative: "即便預測結果為真實影片，但由於川普說話時的部分表情動作與語音節奏略顯生硬，且背景壁爐的細節與前景人物的對焦感存在落差，缺乏真實物理細節的嚴謹性，因此可能是 AI 生成影片。",
        answer: "真實影片" 
    },
    { //龍捲風 陷阱題：真實影片但AI提示說有AI訊號
        video: "l6bM2KrhChM", 
        filename: "23.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊。", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，影片中龍捲風底部與地面草地的接觸面缺乏塵土飛揚的物理反應，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於天空雲層的明暗層次、前景鐵絲網的透視關係，缺乏 AI 生成影片常見的邊緣閃爍或物理邏輯扭曲，因此可能是真實影片。",
        answer: "真實影片" 
    },
    { //海嘯
        video: "23UdqvvkrcI", 
        filename: "24.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "此影片確定是 AI 生成影片，和真實影片相比，影片中巨浪湧入市區時水流的運動方向過於一致，且被吞沒的建築物邊緣並未產生碎裂或水花噴濺效果，顯然缺乏真實影片應有的物理規律性，因此證實為 AI 生成影片。", 
        Negative: "即便預測結果為 AI 生成影片，但由於街道上停放車輛的透視比例，以及鏡頭由遠及近俯瞰小鎮時產生的自然運鏡感，缺乏 AI 生成影片常見的邊緣閃爍或物理邏輯扭曲，因此可能是真實影片。",
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
            nextBtn.innerText = "前往第三步驟"; // 恢復文字
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
    const noneCheckbox = document.getElementById('videotool9');
    const otherCheckboxes = document.querySelectorAll('input[name="tool"]:not(#videotool9)');
  
    // 勾選「無使用經驗」時，取消所有其他選項
    noneCheckbox.addEventListener('change', function () {
      if (this.checked) {
        otherCheckboxes.forEach(cb => cb.checked = false);
      }
    });
  
    // 勾選任何其他選項時，取消「無使用經驗」
    otherCheckboxes.forEach(cb => {
      cb.addEventListener('change', function () {
        if (this.checked) {
          noneCheckbox.checked = false;
        }
      });
    });
document.getElementById('demographicForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerText = "提交中...";
    
    const formData = new FormData(this);
    const demoPayload = {
        user_id:    userId,
        gender:     formData.get('gender'),
        age:        formData.get('age'),
        education:  formData.get('edu'),
        AIvideo_tool: formData.getAll('tool').join(','),  // 複選，逗號分隔
        AIvideo_time:      formData.get('time'),           // 第5題
        AIvideo_frequency: formData.get('frequency'),      // 第6題
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
// 1. 設定 30 題的資料清單
const questions = [
    {  //斑馬與幼獅
        video: "1.MP4", 
        is_real: false, 
        is_trap: false,
        perception: "AI資訊。", 
        cognition: "這段影片確切是一段由AI生成的虛擬影像。相較於「真實自然紀錄片」中動物應有的解剖結構與重力感，本影片顯然缺乏斑馬頸部支撐幼獅重量時應有的肌肉張力，且斑馬頭部與幼獅接觸面出現了像素融合的超現實特徵，這絕對符合人工智慧演算圖像的典型錯誤。", 
        contrast: "雖然我認為這是一段AI生成影片，但它可能不完全準確，因為背景中荒野植被的層次感與光影投射顯得非常符合自然邏輯。這可能也暗示著這或許是一段受損嚴重的真實錄像，且可能潛在是由於低速快門導致動態模糊，產生了類似 AI 演算出的形體扭曲，而不完全是由演算法虛構成的。",
        answer: "AI生成影片" 
    },
    { //泰國大象 陷阱題：真實影片但AI提示說有AI訊號 
        video: "2.MP4", 
        is_real: true, 
        is_trap: true,
        perception: "AI資訊。", 
        cognition: "這段影片確切是一段由AI生成的虛擬影像。相較於「真實泰國慶典影片」中大象應有的關節活動與物理重量感，本影片顯然缺乏大象跪地時應有的生理結構支撐，且象腿與地面接觸處出現了不自然的形變與像素融合，這絕對符合人工智慧演算圖像的典型錯誤。", 
        contrast: "雖然我認為這是一段AI生成影片，但它可能不完全準確，因為畫面中群眾的動作、泰國寺廟細節以及陽光投射的陰影處理得極為細緻。這可能也暗示著這或許是一個極端罕見的文化表演紀錄，且可能潛在是由於攝影機特殊的廣角變形或低幀率錄製，導致大象的動作出現了類似AI演算出的視覺偽影，而不完全是由演算法虛擬產生的。",
        answer: "真實影片" 
    },
    { //泰妍與潤兒
        video: "3.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的影片。相較於「AI 生成影片」中常見的肢體邊緣像素融合與非自然形變，本影片顯然缺乏演算法在處理多人互動時產生的邏輯錯誤，其人物表情與環境光影的連續性絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為畫面的動態範圍與背景雜訊在低解析度下顯得有些模糊。這可能也暗示著這或許是一個經由生成式模型高度修復過的片段，而不完全是真實拍攝。",
        answer: "真實影片" 
    },
    { //愛迪達廣告
        video: "4.MP4", 
        is_real: false,
        is_trap: false,
        perception: "AI資訊", 
        cognition: "這段影片確切是由AI生成的虛擬影像。相較於「真人實拍廣告」中服飾布料應有的物理摺痕與光線反射，本影片顯然缺乏人物動作時的解剖細節一致性，且背景建築與人物邊緣時常出現像素融合的超現實質感，這絕對展現了人工智慧生成內容的高度擬真與非現實美感。", 
        contrast: "雖然我認為這是一段AI生成影片，但它可能不完全準確，因為影片中包含大量具備現實邏輯的文字招牌與細膩的街道陰影。這可能也暗示著這或許是一個以真實錄影為底稿，再經由AI深度風格化處理的內容，其底層結構可能潛在保留了原始拍攝的骨架，而非百分之百由演算法憑空想像。",
        answer: "AI生成影片" 
    },
    
    { //開鐵門
        video: "5.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的影片。相較於「AI生成影片」在處理極端混亂場面時常出現的肢體重疊與物件邏輯崩壞，本影片顯然缺乏演算法常見的邊緣羽化與像素融合錯誤，其高密度的物理碰撞細節與人物表情的一致性，絕對證實了這是一段無法由當前AI完美模擬的真實社會紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為在人群湧入的瞬間，門板邊緣的劇烈震動與人物動作顯得有些不自然。這些特徵是 AI 生成影片中常有的物理瑕疵，這暗示著該影像可能其實是AI生成的，只是其精細度或許是達到了極高水準，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },
    { //入浴球
        video: "6.MP4", 
        is_real: false,
        is_trap: false,
        perception: "AI資訊。", 
        cognition: "這段影片確切是一段由AI生成的虛構影像。相較於「真實生活影片」中液體擴散應有的隨機性與物理水波，本影片顯然缺乏泡沫在水中真實交融的質感，且浴缸邊緣與水面交界處出現了明顯的像素融合與邏輯不一致，這絕對符合人工智慧演算模擬的典型瑕疵。", 
        contrast: "雖然我認為這是一段AI生成影片，但它可能不完全準確，因為畫面中嬰兒的神情捕捉與光影在水面的折射顯得極其細膩。這些特徵在高品質實拍中非常常見，這暗示著該影像可能其實是真實影片，只是其誇張的彩色泡沫與過度飽和的色彩或許是達到了極高水準的視覺特效，使其看起來就像一段AI生成影片。",
        answer: "AI生成影片" 
    },
    { //農夫
        video: "7.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄像。相較於「AI生成影片」在處理大量細小物件噴飛時常出現的像素破碎或閃爍，本影片顯然缺乏演算法處理複雜群體動作時的邏輯錯誤，其番茄落下的物理慣性與現場自然光影的連續性，絕對證實了這是一段物理世界中的真實農業紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為番茄噴湧而出的速度與數量極其驚人，甚至顯得有些超現實。這些特徵是AI生成影片中常見的誇張視覺表現，這暗示著該影像可能其實是AI生成的，只是其對於農田環境與光學質感的模擬達到了極高水準，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },
    { //戰地記者
        video: "8.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄像。相較於「AI 生成影片」在處理極端動態與物理破碎時常出現的像素閃爍或物件邏輯崩解，本影片顯然缺乏演算法模擬爆炸瞬間應有的模糊與不對稱感，其碎石飛濺的軌跡與光影瞬間變化的真實度，絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為爆炸瞬間的煙霧形狀與碎塊飛散的路徑在鏡頭翻轉下顯得極其劇烈且完美。這些特徵在高品質的AI生成影像中亦能被細緻模擬，這暗示著該影像可能其實是AI生成的，只是其對於極端物理動態與光學變化的處理達到了驚人的擬真度，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },

    { //川普大谷翔平
        video: "9.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄像。相較於「AI 生成影片」在處理人物握手或遞交物件時常出現的肢體重合與邊緣模糊，本影片顯然缺乏演算法處理複雜手部動作時的邏輯錯誤，其人物表情轉換的自然度與環境中多樣化背景物件的穩定性，絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為畫面中人物的皮膚質感在特定光影下顯得異常平滑且缺乏瑕疵。這些特徵是 AI 生成影片中常見的數位合成質感，這暗示著該影像可能其實是 AI 生成的，只是其對於辦公室場景細節與人物特徵的擬真度達到了極高水準，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },
    { //地震
        video: "10.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄像。相較於「AI 生成影片」在處理地面大規模形變時常出現的紋理拉伸與邊緣像素模糊，本影片顯然缺乏演算法模擬動態景致時常見的邏輯不一致性，其地磚縫隙隨擠壓產生的細微破碎與車內後視鏡同步反映的環境變化，絕對證實了這是一段物理世界中的真實地質紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為地面如液體般波動的幅度與規律感顯得極其超現實。這些特徵是 AI 生成影片中常見的物理規律崩壞表現，這暗示著該影像可能其實是 AI 生成的，只是其對於街道細節與震動感的動態模擬達到了極高水準，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },
    { //炸湯圓
        video: "11.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄影。相較於「AI 生成影片」在處理快速震動與物件碰撞時常出現的圖像重疊或邏輯破裂，本影片顯然缺乏演算法常見的邊緣像素模糊錯誤，其鍋具跳動的隨機物理軌跡與環境音的同步震動，絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為鍋碗瓢盆在震動中跳躍的高度與節奏感顯得極其劇烈。這些特徵是 AI 生成影片中常見的物理規律誇張化表現，這暗示著該影像可能其實是 AI 生成的，只是其對於廚房細節與動態陰影的模擬達到了極高水準，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },
    { //日本飲料廣告
        video: "12.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄影。相較於「AI 生成影片」在處理多人物大動作擺動時常出現的肢體殘影或背景扭曲，本影片顯然缺乏演算法處理複雜運鏡時的圖像閃爍錯誤，其人物服飾隨動作產生的自然褶皺與光學一致性，絕對證實了這是一段物理世界中的真實影像紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為畫面中人物整齊劃一的誇張動作與飽和度極高的復古色調顯得有些不自然。這些特徵是 AI 生成影片中常見的超現實與高度一致化表現，這暗示著該影像可能其實是 AI 生成的，只是其對於場景細節與動態銜接的模擬達到了極高水準，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },
    { //楊紫瓊 陷阱題：真實影片但AI提示說有AI訊號
        video: "13.MP4", 
        is_real: true,
        is_trap: true,
        perception: "AI資訊", 
        cognition: "這段影片確切是由 AI 生成的虛擬影像。相較於「真實電影花絮」中人物細微動作的物理慣性與肌肉張力，本影片顯然缺乏人物在拍手與大笑時肌肉聯動的真實自然度，且在快速晃動中臉部與背景交界處出現了像素融合的超現實質感，這絕對符合人工智慧演算生成的典型視覺瑕疵。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中人物的對話口型、笑聲與動作配合得極為精準。這些特徵在真實的高品質實拍中非常常見，這暗示著該影像可能其實是真實影片，只是其過度飽和的色彩與特定角度下的光學失真或許是達到了極高水準的數位修補，使其看起來就像一段 AI 生成影片。",
        answer: "真實影片" 
    },
    { //小女孩訪談 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "14.MP4", 
        is_real: false,
        is_trap: true,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄像。相較於「AI 生成影片」在處理人物細微表情與嘴型同步時常出現的像素閃爍，本影片顯然缺乏演算法模擬動態對話時的邏輯錯誤，其人物眼神的靈動感與現場觀眾笑聲的自然反饋，絕對證實了這是一段物理世界中的真實節目紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為小女孩的童言童語與成人的對答銜接得極其完美且富有戲劇效果。這些特徵是 AI 生成影片中常見的「理想化腳本」表現，這暗示著該影像可能其實是 AI 生成的，只是其對於棚內燈光質感與人物特徵的擬真度達到了極高水準，使其看起來就像一段真實影片。",
        answer: "AI生成影片" 
    },
    { //木耳飲廣告
        video: "15.MP4", 
        is_real: false,
        is_trap: false,
        perception: "AI資訊。", 
        cognition: "這段影片確切是由 AI 生成的虛擬影像。相較於「純實拍廣告」中食材應有的物理重量感，本影片顯然缺乏液體流動時的隨機性與重力連貫性，且背景的光影分佈與主體交界處出現了明顯的像素融合，其特徵絕對符合人工智慧演算出的理想化廣告圖像。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中人物的對話口型與職人動作顯得極其精細且符合現實。這些特徵在高品質的實拍中非常常見，這暗示著該影像可能其實是真實影片，只是其過度飽和的色彩與完美的光學柔焦或許是達到了極高水準的數位修飾，使其看起來就像一段 AI 生成影片。",
        answer: "AI生成影片" 
    },
    { //AI醫生
        video: "16.MP4", 
        is_real: false,
        is_trap: false,
        perception: "AI資訊。", 
        cognition: "這段影片確切是由 AI 生成的虛構影像。相較於「真人衛教影片」中臉部肌肉在說話時應有的微小聯動，本影片顯然缺乏唇部動作與雙頰肌肉收縮的物理一致性，且在說話過程中臉部與後方背景的邊界出現了像素閃爍的現象，這絕對符合人工智慧演算生成的典型瑕疵。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中醫師的膚質細節、光影在白袍上的反射以及背景診間的擺設都顯得極其細膩。這些特徵在真實的高品質實拍中非常常見，這暗示著該影像可能其實是真實影片，只是其過於平滑的運鏡與特定濾鏡效果或許是達到了極高水準的數位修補，使其看起來就像一段 AI 生成影片。",
        answer: "AI生成影片" 
    },
    { //seedance 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "17.MP4", 
        is_real: false,
        is_trap: true,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄影。相較於「AI 生成影片」在處理多人物同步舞蹈與長袖擺動時常出現的像素閃爍與肢體交疊錯誤，本影片顯然缺乏演算法模擬動態畫面時常見的邏輯不一致性，其人物表情的自然轉換、服飾布料隨動作產生的物理褶皺，以及背景煙火與人物光影的高度一致性，絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為畫面中人物的動作極其整齊劃一，背景的古風建築與絢麗煙火在色調上顯得過於完美且飽和。這些特徵是 AI 生成影片中常見的理想化視覺表現，這暗示著該影像可能其實是 AI 生成的，只是其對於人物細節與場景深度的模擬達到了極高水準，使其看起來就像一段真實影片。",
        answer: "AI生成影片" 
    },
    { //韓國女生 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "18.MP4", 
        is_real: false,
        is_trap: true,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄影。相較於「AI 生成影片」在處理頭髮絲隨風擺動以及人物回眸時常出現的像素閃爍或五官變形，本影片顯然缺乏演算法模擬動態光影時常見的邏輯錯誤，其人物皮膚表面的細微紋理、環境中的自然逆光效果，以及與背景街道空間感的銜接，絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為畫面中人物的動作與神情顯得極其完美且富有劇情感，背景的復古巷弄與河岸景致在色調上顯得過於純淨。這些特徵是 AI 生成影片中常見的「理想化場景」表現，這暗示著該影像可能其實是 AI 生成的，只是其對於景深效果與人物特徵的動態模擬達到了極高水準，使其看起來就像一段真實影片。",
        answer: "AI生成影片" 
    },
    { //馬英九
        video: "19.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄影。相較於「AI 生成影片」在處理多人互動與背景文字時常出現的像素閃爍或字體變形，本影片顯然缺乏演算法模擬現實場景時的邏輯錯誤，其人物說話時自然的肌肉連動、現場群眾聲音的反饋，以及背景看板文字的清晰度與穩定性，絕對證實了這是一段物理世界中的真實活動紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為畫面中人物的服飾細節極其豐富且對比鮮明，現場的喝采聲與人物動作的銜接也顯得非常富有感染力。這些特徵在高品質的 AI 生成影像中亦能被模擬，這暗示著該影像可能其實是 AI 生成的，只是其對於活動現場的燈光質感與環境音效的處理達到了極高水準，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },
    { //風車風扇
        video: "20.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄影。相較於「AI 生成影片」在處理巨大物件移動時常出現的比例縮放不自然或與周圍環境邊界模糊，本影片顯然缺乏演算法模擬極端長度物件時的邏輯錯誤，其葉片隨車輛行進產生的細微震顫、精準的物理重力感，以及葉片表面與自然陽光交織出的真實光影變化，絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為葉片垂直矗立的高度與特殊的運送角度顯得極其超現實。這些特徵是 AI 生成影片中常見的物理規律挑戰表現，這暗示著該影像可能其實是 AI 生成的，只是其對於公路背景細節與巨大物件質感細節的模擬達到了極高水準，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },
    { //警察送飯 陷阱題：AI影片但AI提示說沒有AI訊號
        video: "21.MP4", 
        is_real: false,
        is_trap: true,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄影。相較於「AI 生成影片」在處理快速且複雜的肢體糾纏（如雙手穿過門縫拉扯）時常出現的像素崩壞或物件融合錯誤，本影片顯然缺乏演算法常見的邏輯漏洞，其人物動作的物理衝擊感、現場監控攝影機特有的畫質質感，以及肢體與門板間真實的遮擋關係，絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為衝突發生的時機與動作轉折顯得極具戲劇張力。這些特徵是 AI 生成影片中常見的誇張衝突表現，這暗示著該影像可能其實是 AI 生成的，只是其對於監獄環境細節與人物動態的模擬達到了極高水準，使其看起來就像一段真實影片。",
        answer: "AI生成影片" 
    },
    { //川普打架 陷阱題：AI影片但AI提示說沒有AI訊號
        video: "22.MP4", 
        is_real: false,
        is_trap: true,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄像。相較於「AI 生成影片」在處理兩個人物近距離推擠與抓握衣領時常出現的肢體重合或邏輯崩壞，本影片顯然缺乏演算法模擬動態衝突時常見的像素融合錯誤，其人物在激烈運動下服飾產生的物理褶皺與光影連貫性，絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為兩位公眾人物在正式場合發生如此激進的肢體衝突顯得極其超現實。這些特徵是 AI 生成影片中常見的「話題性虛構場景」表現，這暗示著該影像可能其實是 AI 生成的，只是其對於人物特徵與辦公室環境細節的動態模擬達到了極高水準，使其看起來就像一段真實影片。",
        answer: "AI生成影片" 
    },
    { //戰爭逃難
        video: "23.MP4", 
        is_real: false,
        is_trap: false,
        perception: "AI資訊", 
        cognition: "這段影片確切是由 AI 生成的虛擬影像。相較於「真實軍事錄影」中高速移動物體應有的空氣動力學特徵，本影片顯然缺乏戰機在低空疾速飛過時應產生的機身細微震顫與環境音壓的物理連貫性，且在戰機掠過瞬間，機身邊緣與背景天空出現了明顯的像素融合錯誤，這絕對符合人工智慧演算生成的典型視覺瑕疵。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中人物仰頭驚呼的神情捕捉與光影在臉部的變化顯得極其細膩。這些特徵在真實的高品質實拍中非常常見，這暗示著該影像可能其實是真實影片，只是其戰機俯衝的誇張動態與過於穩定的運鏡或許是達到了極高水準的視覺特效處理，使其看起來就像一段 AI 生成影片。",
        answer: "AI生成影片" 
    },
    { //戰爭
        video: "24.MP4", 
        is_real: false,
        is_trap: false,
        perception: "AI資訊。", 
        cognition: "這段影片確切是由 AI 生成的虛擬影像。相較於「真實軍事基地錄影」中不同戰機應有的細微規格差異與自然停放的隨機性，本影片顯然缺乏物理世界中複雜光影投影的真實感，且戰機機身上的國旗與編號在重複排列時出現了邏輯不對稱與像素閃爍，這絕對符合人工智慧演算生成的典型視覺瑕疵。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中地面設施的鏽蝕質感、裝甲車的細節以及人物在陰影下的比例顯得極其細膩。這些特徵在真實的高品質軍事紀錄中非常常見，這暗示著該影像可能其實是真實影片，只是其過於完美的對稱佈局與極高密度的集結場景或許是達到了極高水準的視覺特效處理，使其看起來就像一段 AI 生成影片。",
        answer: "AI生成影片" 
    },
    { //炸大樓
        video: "25.MP4", 
        is_real: false,
        is_trap: false,
        perception: "AI資訊。", 
        cognition: "這段影片確切是一段由 AI 生成的虛構影像。相較於「真實實拍錄影」中雨滴與鏡頭移動應有的物理遮擋與折射邏輯，本影片顯然缺乏爆炸衝擊波對前方雨滴與樹木產生的真實物理影響，且在火球出現的瞬間，煙霧邊緣與背景天空出現了明顯的像素融合錯誤，這絕對符合人工智慧演算生成的典型視覺瑕疵。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中帆船酒店的建築細節、雨天陰鬱的光影質感，以及玻璃上滑落的雨滴都顯得極其細膩。這些特徵在真實的高品質實拍中非常常見，這暗示著該影像可能其實是真實影片，只是其突如其來的爆炸特效與超現實的動態呈現或許是達到了極高水準的視覺特效處理，使其看起來就像一段 AI 生成影片。",
        answer: "AI生成影片" 
    },
    { //政治人物玩滑板
        video: "26.MP4", 
        is_real: false,
        is_trap: false,
        perception: "AI資訊。", 
        cognition: "這段影片確切是由 AI 生成的虛構影像。相較於「真實實拍錄影」中人物在劇烈肢體接觸時應有的衣服拉扯皺褶與物理碰撞慣性，本影片顯然缺乏人物在推擠瞬間應有的重心位移與肢體遮擋邏輯，且在人物交手之際，衣服邊緣與後方背景出現了明顯的像素融合與抖動，這絕對符合人工智慧演算生成的典型視覺瑕疵。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中人物的面部特徵、行走姿勢以及現場的光影變化都顯得極其細膩且連貫。這些特徵在真實的高品質新聞實拍中非常常見，這暗示著該影像可能其實是真實影片，只是其突如其來的衝突動作與特定的拍攝角度或許是達到了極高水準的數位模擬，使其看起來就像一段 AI 生成影片。",
        answer: "AI生成影片" 
    },
    { //假川普 陷阱題：真實影片但AI提示說有AI訊號
        video: "27.MP4", 
        is_real: true,
        is_trap: true,
        perception: "AI資訊。", 
        cognition: "這段影片確切是由 AI 生成的虛擬影像。相較於「真實自拍錄影」中人物面部肌肉在說話與大笑時應有的自然聯動，本影片顯然缺乏皮膚紋理隨表情變化的物理連貫性，且在下方人物移動時，上方人物的五官邊緣與背景天空交界處出現了明顯的像素閃爍與邊緣抖動，這絕對符合人工智慧演算生成的典型視覺瑕疵。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中仰角自拍的光影變化、人物眼鏡上的反射以及對話口型與聲音的同步感都顯得極其自然。這些特徵在真實的隨手紀錄中非常常見，這暗示著該影像可能其實是真實影片，只是其特定人物特徵的呈現與過於平滑的動態修補或許是達到了極高水準的數位修飾，使其看起來就像一段 AI 生成影片。",
        answer: "真實影片" 
    },
    { //高市與川普
        video: "28.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄像。相較於「AI 生成影片」在處理人物手部細微動作與複雜服裝紋理（如西裝與藍色套裝的細緻纖維）時常出現的模糊與重疊錯誤，本影片顯然缺乏演算法模擬動態對話時的邏輯瑕疵，其人物表情的自然轉換、眼神的靈動感，以及與背景奢華裝飾的光影一致性，絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片是正確的診斷，但它可能不完全準確，因為對話內容涉及極具敏感度且出人意料的歷史性話題，這與公眾人物通常維持的正式外交儀態有些落差。這些特徵是 AI 生成影片中常見的「話題性腳本」表現，這暗示著該影像可能其實是 AI 生成的，只是其對於人物聲音特徵、口型同步以及環境細節的模擬達到了極高水準，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },
    { //龍捲風 陷阱題：真實影片但AI提示說有AI訊號
        video: "29.MP4", 
        is_real: true,
        is_trap: true,
        perception: "AI資訊。", 
        cognition: "這段影片確切是由 AI 生成的虛擬影像。相較於「真實氣象錄影」中雲層與地面應有的連動性，本影片顯然缺乏龍捲風接觸地面時應產生的大量瓦礫與粉塵，且漏斗雲的形狀在擺動時顯現出過於規整的液體感與不自然的質地變換，這絕對符合人工智慧演算生成的典型視覺瑕疵。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中草原的色彩層次、遠處樹木的剪影以及透過車窗拍攝的真實臨場感都顯得極其細膩。這些特徵在真實的追風紀錄中非常常見，這暗示著該影像可能其實是真實影片，只是其龍捲風過於潔白流暢的外觀與特殊的雲層結構或許是遇到了極為罕見的氣象條件，使其看起來就像一段 AI 生成影片。",
        answer: "真實影片" 
    },
    { //海嘯
        video: "30.MP4", 
        is_real: false,
        is_trap: false,
        perception: "AI資訊。", 
        cognition: "這段影片確切是由 AI 生成的虛擬影像。相較於「真實海嘯或巨浪錄影」中水體移動應有的物理慣性與水氣噴濺，本影片顯然缺乏巨浪推動時應有的動態細節，且背景巨大的水牆與遠方雲層銜接處出現了不自然的邊界感，其靜態質感與近處城鎮動態的不和諧，絕對符合人工智慧演算生成的典型視覺瑕疵。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中城鎮街道的細節、屋頂的排列以及陰天特有的光影氛圍都顯得極其細膩。這些特徵在真實的高空俯瞰紀錄中非常常見，這暗示著該影像可能其實是真實影片，只是其背景中異常巨大的海浪景象或許是遇到了極端罕見的自然奇觀，使其看起來就像一段 AI 生成影片。",
        answer: "AI生成影片" 
    },
    { //吃雞排
        video: "31.MP4", 
        is_real: true,
        is_trap: false,
        perception: "未偵測到AI訊號。", 
        cognition: "這段影片確切是一段真實拍攝的錄影。相較於「AI 生成影片」在處理人物咬下食物與咀嚼動作時常出現的像素破碎或食物形狀不自然變形，本影片顯然缺乏演算法模擬現實動作時的邏輯錯誤，其炸雞外皮的顆粒感、人物咀嚼時的肌肉連動，以及環境音中清脆的卡滋聲與動作的高度同步，絕對證實了這是一段物理世界中的真實紀錄。", 
        contrast: "雖然我認為這是一段真實影片，但它可能不完全準確，因為畫面中人物的皮膚質感在燈光下顯得非常平滑，且嚼食的聲音頻率聽起來異常均勻清脆。這些特徵在高品質的 AI 生成影像或經過深度美顏濾鏡處理的影片中亦能被模擬，這暗示著該影像可能其實是 AI 生成的，只是其對於室內光影質感與動態細節的處理達到了極高水準，使其看起來就像一段真實影片。",
        answer: "真實影片" 
    },
    { //
        video: "32.MP4", 
        is_real: false,
        is_trap: false,
        perception: "AI資訊。", 
        cognition: "這段影片確切是由 AI 生成的虛擬影像。相較於「真實災難錄影」中土石流動應有的物理重量與撞擊細節，本影片顯然缺乏土石崩落時與周圍環境應有的複雜交互作用，且在崩塌發生的區域，房屋與土石交界處出現了不自然的像素融合與邊緣閃爍，這絕對符合人工智慧演算生成的典型視覺瑕疵。", 
        contrast: "雖然我認為這是一段 AI 生成影片，但它可能不完全準確，因為畫面中直升機視角的臨場感、手持手機拍攝的倒影以及遠處城鎮與雲霧的層次感都顯得極其細膩。這些特徵在真實的空拍紀錄中非常常見，這暗示著該影像可能其實是真實影片，只是其山坡崩落的驚人速度與大規模的地貌改變或許是遇到了極端罕見的地質災害，使其看起來就像一段 AI 生成影片。",
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
    // 對應第 3, 8, 12, 15, 19, 24, 27, 31 題
    const trapPositions = [2, 7, 11, 14, 18, 23, 26, 30]; 

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
let lastTrustScore = 7; // 預設起始信任值
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

    // 2. 顯示強制提醒
    alert("30 秒作答時間已到！系統將自動記錄並進入評分階段。");

    // 3. 【核心跳轉邏輯】直接切換分頁，不經過按鈕點擊
    if (v2) v2.pause();
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
        v1.pause();
        v1.currentTime = 0; // (選填) 讓影片回到開頭
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
    // 1. 停止第二階段影片播放
    if (v2) {
        v2.pause();
    }
    
    // 2. 停止倒數計時器
    clearInterval(timerInterval);
    new bootstrap.Tab(document.querySelector('#step-3-tab')).show();
    window.scrollTo(0,0);
});

// 3. 提交本題數據並換題
document.querySelector('#submitButton').addEventListener('click', async function () {
    const trust = document.querySelector('input[name="trust-a"]:checked');
    if(!trust) return alert("請評分信任程度");

    this.disabled = true;
    this.querySelector('.spinner-border').classList.remove('d-none');

    const payload = {
        user_id: userId,
        order_no: currentIndex + 1,        // 這是「受試者看到的順序」
        actual_video: questions[currentIndex].video, // 這才是「影片真實名稱」，分析時以這個為主
        is_trap: questions[currentIndex].is_trap || false, // 增加這行
        hint_type: currentHintType,                        // 增加這行 (Cognition/Perception/Contrast)
        p1: document.querySelector('input[name="p1_choice"]:checked').value,
        p2: document.querySelector('input[name="p2_choice"]:checked').value,
        trust: trust.value
    };

    await fetch('/submit_step', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    lastTrustScore = parseInt(trust.value);

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderNextQuestion();
        this.disabled = false;
        this.querySelector('.spinner-border').classList.add('d-none');
    } else {
        // --- 修改這裡：32 題做完後，不要跳跳轉頁面，改為切換到問卷分頁 ---
    // 隱藏所有的階段分頁
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('show', 'active'));
    
    // 顯示問卷分頁 (假設你的 HTML 中問卷 ID 為 demographics)
    const demoTab = document.getElementById('demographics');
    if (demoTab) {
        demoTab.classList.add('show', 'active');
        window.scrollTo(0, 0);
    } else {
        // 如果沒抓到分頁，才跳感謝頁
        window.location.href = '/thank_you';
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
    if (lastTrustScore < 5) {
        // 低信任度 -> 給予「認知型」解釋
        displayHint = q.cognition;
        currentHintType = "Cognition";
    } else if (lastTrustScore > 8) {
        // 高信任度 -> 給予「對比型」解釋
        displayHint = q.contrast;
        currentHintType = "Contrast";
    } else {
        // 中等信任度 -> 給予「感知型」解釋
        displayHint = q.perception;
        currentHintType = "Perception";
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
    if(v1 && v2) {
        const videoPath = "/static/videos/" + q.video;
        v1.src = videoPath;
        v2.src = videoPath;
        v1.load();
        v2.load();
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
        await fetch('/submit_demographics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(demoPayload)
        });
        alert("實驗完成！感謝您的貢獻。");
        window.location.href = '/thank_you';
    } catch (err) {
        alert("提交失敗，請檢查網路連線");
        submitBtn.disabled = false;
    }
});
// 初始啟動
renderNextQuestion();
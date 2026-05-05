const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0HdYaeSKy-hINgIatkYLw6GU8q-Fh7M278fU9w4frmhicsABwGfCRBSnoOA6wTSfe/exec";
// 1. 設定 30 題的資料清單
const questions = [
    { //泰國大象
        video: "Q1MZgYDNDt0", 
        filename: "1.MP4",
        type:"Low_risk_Real",
        is_real: true, 
        is_trap: false,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，影片中大象跪下的重力感與群眾手機的自然反射，顯然缺乏 AI 模擬時常有的像素閃爍或物件崩解瑕疵。背景陽光與建築的高度一致性，絕對證實了這是物理世界中的真實紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，畫面中大象動作過於整齊且膚色呈現特殊的粉紅色，或許是高品質 AI 的虛構產物。這種極致完美的視覺呈現可能潛在地讓人懷疑其真實性，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },
    { //泰妍與潤兒
        video: "cd9qcIsPzTs", 
        filename: "2.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝，相較於「AI 生成影片」，影片中人物大笑時細微的面部肌肉抽動與畫質特有的年代感，顯然缺乏 AI 模擬時常有的皮膚過度平滑或五官位移瑕疵。現場雜亂的錄音設備線條與光影的一致性，絕對證實了這是物理世界中的真實紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，畫面中多位成員在狹小空間內的動作極其同步，且早期畫質的模糊感或許是 AI 為了掩飾運算錯誤而刻意產生的噪點。這種高度集中的群體動態呈現可能潛在地讓人懷疑其真實性，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    }, 
    { //開鐵門
        video: "pOrxmVtXs3Q?feature=share", 
        filename: "3.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，影片中大量群眾鑽過鐵門時的肢體碰撞與衣物摩擦感，顯然缺乏演算法模擬時常見的像素閃爍或物件邏輯崩解瑕疵。現場鐵門升起的金屬質感與光影反射的高度一致性，絕對證實了這是物理世界中的真實紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，畫面中群眾瘋狂鑽入鐵門的集體動作過於緊湊且同步，或許是高品質 AI 的虛構產物。這種極端混亂卻又具有某種規律性的視覺呈現可能潛在地讓人懷疑其真實性，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },
    { //入浴球
        video: "WRJULWdcMFo?feature=share", 
        filename: "4.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片確實是 AI 生成。相較於「真實影片」，畫面中入浴劑產生的彩虹漩渦速度與泡沫型態顯然缺乏物理真實感，且最後出現的尼莫玩偶在水面的漂浮邏輯出現明顯崩解。這種過於飽和且違背常態流體力學的視覺呈現，絕對證實了這是 AI 演算法構建出的虛構場景。", 
        Negative: "目前的預測結果認為這段影片是 AI 生成的。然而，嬰兒細微的表情變化與伸手入水的動態反應，或許是將真實拍攝的人物影像與特效後期製作結合的產物。這種虛實結合的處理方式可能潛在地誤導了判斷，因此，此預測可能是不正確的。",
        answer: "AI生成影片" 
    },
    { //農夫
        video: "ba4L-5oEcDQ?feature=share", 
        filename: "5.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，影片中成千上萬顆番茄傾瀉而出的物理碰撞與隨機滾動路徑，顯然缺乏演算法模擬時常有的像素閃爍或物件邏輯崩解瑕疵。現場採收工人的自然動作與陽光下番茄色澤的高度一致性，絕對證實了這是物理世界中的真實紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，畫面中番茄瀑布般湧下的流動感與極其飽和的紅色調，或許是高品質 AI 的虛擬特效。這種視覺張力極強且規律度高的動態呈現可能潛在地讓人懷疑其真實性，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },
    { //戰地記者
        video: "xf_59NZCb18", 
        filename: "6.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，影片中爆炸時隨機噴散的瓦礫與記者躲避時自然產生的鏡頭晃動，顯然缺乏演算法模擬時常有的像素閃爍或物件邏輯崩解瑕疵。現場光影在爆炸瞬間的快速變化與環境音效的高度一致性，絕對證實了這段真實發生的物理紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，爆炸瞬間產生的巨大煙霧與瓦礫噴飛的視覺張力，或許是高品質 AI 的虛擬模擬。這種宛如影視特效般的動態呈現可能潛在地讓人懷疑其真實性，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },

    { //川普大谷翔平
        video: "La3vRnyydPE", 
        filename: "7.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，影片中人物握手時的手部動作與衣物皺褶變化極其自然，顯然缺乏演算法模擬時常有的像素閃爍或物件邏輯崩解瑕疵。現場光影在不同材質表面的反射與人物交談時的細微神情，絕對證實了這是一段物理世界中的真實紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，畫面中極其穩定的鏡頭調度與人物完美的動作流暢度，或許是高品質 AI 的虛構產物。這種視覺呈現過於精準且場景燈光配置極佳，可能潛在地讓人懷疑其真實性，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },
    { //地震
        video: "WZHA-Dvd7Uw?feature=share", 
        filename: "8.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，影片中地面磚塊隨波動碎裂與人行道起伏的物理機制，顯然缺乏演算法模擬時常有的像素閃爍或物件邏輯崩解瑕疵。現場電線桿的晃動與柏油路裂縫的高度一致性，絕對證實了這是物理世界中地震發生的真實紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，畫面中地面如同海浪般規律起伏的視覺震撼感，或許是高品質 AI 的虛構特效。這種極端罕見且極具動態張力的地形變化可能潛在地讓人懷疑其真實性，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },
    { //炸湯圓
        video: "0SpJ-obzsdU", 
        filename: "9.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，食材在拋接過程中的旋轉軌跡與入鍋後的彈跳動態，顯然缺乏演算法模擬時常有的像素閃爍或物件邏輯崩解瑕疵。現場光線在不鏽鋼鍋具上的精準反射，絕對證實了這是物理世界中的真實紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，食材被精準拋入移動中鍋具的動作過於流暢且完美，或許是高品質 AI 的虛構產物。這種極致精準的動態呈現可能潛在地讓人懷疑其真實性，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },
    { //楊紫瓊 陷阱題：真實影片但AI提示說有AI訊號
        video: "J8q_fnID_Wc", 
        filename: "10.MP4",
        type:"Low_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊", 
        Positive: "這段影片確實是 AI 生成。相較於「真實影片」，畫面中人物在說話時，嘴型與牙齒的咬合邊緣在快速切換鏡頭時顯得不夠銳利，且背景辦公室的物件線條存在微小的像素閃爍。這種在極細微處表現出的邏輯不連貫性，絕對證實了這是由 AI 演算法模擬出的虛構影像。", 
        Negative: "目前的預測結果認為這段影片是 AI 生成的。然而，兩位演員交談時眼神交流的自然感，以及服裝細節隨身體動作產生的真實皺摺，或許是源於真實影視素材的大規模取樣與重組。這種極高水準的情感表達與物理質感呈現可能潛在地誤導了判斷，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },
    { //小女孩訪談 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "FIJDrHyVHBk?feature=share", 
        filename: "11.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，女童說話時細微的面部表情變化與觀眾席傳來的自然笑聲回應，顯然缺乏 AI 模擬時常有的嘴型對位不準或五官位移瑕疵。現場演播廳燈光在人物輪廓上的投射，絕對證實了這是物理世界中的真實紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，女童機靈的回答與現場觀眾高度一致的反應，或許是高品質 AI 根據劇本生成的虛擬情境。這種過於戲劇化且節奏分明的互動內容可能潛在地導致判斷失真，因此，此預測可能是不正確的。",
        answer: "AI生成影片" 
    },
    { //木耳飲廣告
        video: "ZBZVUIXga1M", 
        filename: "12.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片確實是 AI 生成。相較於「實機廣告拍攝」，水滴在水梨表面滑落的重力軌跡與背景光斑的閃爍頻率，顯然缺乏自然光影的隨機性，呈現出一種過於完美的數位渲染感。液體倒入碗中時的飛濺顆粒缺乏真實物理碰撞的破碎細節，絕對證實了其演算法生成的背景。", 
        Negative: "目前的預測結果認為這段影片是 AI 生成的。然而，影片中品牌包裝與文字標籤的排版位置極其固定且精準，或許是高階動態攝影機配合商業調色後的實拍成品。這種高品質的商業攝影美學可能潛在地被誤判為 AI 虛構，因此，此預測可能是不正確的。",
        answer: "AI生成影片" 
    },
    { //AI醫生
        video: "OGiGXQ2xVtY", 
        filename: "13.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片顯然是由 AI 生成。相較於「真人實拍」，醫師在說話時的頸部肌肉收縮與背景不鏽鋼箱的反光邏輯，絕對缺乏物理世界中自然光影變化的隨機性。畫面整體的平滑質感與邊緣處的微小數位疊影，這點明確證實了其基於演算法合成的本質。", 
        Negative: "目前的預測結果認為這段影片是 AI 生成的。然而，醫師白袍上的布料紋理細節與背景器材散發出的冷調光澤，或許是來自診間現場環境的自然折射。這種充滿生活氣息與環境寫實感的特徵可能潛在地屬於真實錄影，因此，此預測可能是不正確的。",
        answer: "AI生成影片" 
    },
    { //seedance 
        video: "fJDarSdF1OI",
        filename: "14.MP4", 
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片確實是由 AI 生成。相較於「真人實拍」，人物在旋轉舞動時，衣袖邊緣的布料摺痕與背景建築的透視關係，顯然缺乏物理重量感，且在快速晃動中偶爾出現像素邊緣模糊的特徵。這種流暢卻略顯失真的動態演算，絕對證實了這是基於生成式AI模型的產物。", 
        Negative: "目前的預測結果認為這段影片是 AI 生成的。然而，舞者的肢體動作與背景煙火的同步率極高，或許是經過專業訓練的真人素材。這種高水準的服裝、化妝以及道具細節可能潛在地掩蓋了實拍的本質，因此，此預測可能是不正確的。",
        answer: "AI生成影片" 
    },
    { //韓國女生 陷阱題：AI生成影片但AI提示說沒有AI訊號
        video: "kgtkkwXzAqU", 
        filename: "15.MP4", 
        type:"Low_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，女子走動時裙襬隨步伐擺動的物理慣性，以及周遭巷弄光影的即時交互，絕對缺乏演算法演算時常有的像素閃爍或物件形體崩解瑕疵。背景中複雜的電線細節與建築紋理極其穩定，明確證實了這是物理世界中的真實紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，落日餘暉在女子髮絲邊緣形成的逆光效果過於精緻且完美，或許是高階生成式模型模擬出的虛擬光影。這種極致清透且具備高度濾鏡感的畫面表現，可能潛在地讓人懷疑其真實性，因此，此預測可能是不正確的。",
        answer: "AI生成影片" 
    },

    { //警察送飯 陷阱題：AI影片但AI提示說沒有AI訊號
        video: "Z1yYjyfL0-o?feature=share", 
        filename: "16.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，警員與受刑人劇烈拉扯時的手臂肌肉張力與制服物理皺褶，顯然缺乏演算法模擬時常有的肢體邊緣閃爍或物件邏輯交疊瑕疵。金屬門板與肢體碰撞時產生的即時物理反應與光學陰影，絕對證實了這是物理環境中的真實紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，畫面中光影在牆面與地板上的交界極其穩定且毫無雜訊，或許是 AI 精準模擬物理環境後的產物。這種無瑕疵的成像可能潛在地讓我們忽視了AI生成的可能性，因此，此預測可能是不正確的。",
        answer: "AI生成影片" 
    },
    { //川普打架 陷阱題：AI影片但AI提示說沒有AI訊號
        video: "tSmOS-ENtuI?feature=share", 
        filename: "17.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: true,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實是真實拍攝。相較於「AI 生成影片」，兩人在扭打過程中肢體交疊的邊緣非常清晰，顯然缺乏演算法生成時常見的像素閃爍或物件形變瑕疵。衣物隨動作產生的物理皺褶與光影遮蔽邏輯完全一致，絕對證實了這是現實環境中的實機紀錄。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝的。然而，兩位政治領袖在正式場合大打出手的情境極其不合邏輯，或許是頂尖 AI 透過大量數據模擬出的偽造影像。這種情節上的荒謬性可能潛在地反映出預測的錯誤，因此，此預測可能是不正確的。",
        answer: "AI生成影片" 
    },
    { //戰爭逃難
        video: "AZMSS9TK8Gw?feature=share", 
        filename: "18.MP4", 
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊", 
        Positive: "這段影片絕對是 AI 生成。相較於「真實戰場影像」，爆炸煙霧的擴散密度與戰機飛行的物理慣性，顯然缺乏真實空氣阻力造成的動態變動。鏡頭劇烈晃動卻始終保持精準對焦，絕對證實其為AI生成後的產物。", 
        Negative: "目前的預測認為這段影片是 AI 生成。然而，當事人驚恐的呼救語氣與地面瞬間揚起的碎石塵埃極其寫實，或許是實地拍攝的意外現場。這些具備強烈物理感的細節特徵可能潛在地說明預測錯誤，因此，此預測可能是不正確的。",
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
    { //愛迪達廣告
        video: "L23TX4v-7h4", 
        filename: "20.MP4",
        type:"Low_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片確實是由 AI 生成。相較於「真實拍攝廣告」，畫面中繁花瞬間綻放與人物背景無縫切換的邏輯，絕對缺乏物理現場搭建時應有的空間限制與物件慣性。這種超現實且高度流動的視覺呈現，絕對證實了其生成式演算法的背景。", 
        Negative: "目前的預測結果認為這段影片是 AI 生成的。然而，服裝上的刺繡紋理與模特兒精緻的肢體動作極具美感，或許是高端時尚品牌斥資打造的高科技實景佈置。這種富含設計細節與層次的視覺影像可能潛在地讓人懷疑其虛構性，因此，此預測可能是不正確的。",
        answer: "AI生成影片" 
    },
    { //假川普 陷阱題：真實影片但AI提示說有AI訊號
        video: "kL4tZPCnZxo", 
        filename: "21.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊。", 
        Positive: "這段影片絕對是 AI 生成。相較於「真人現場會面」，川普面部表情在說話時缺乏人類皮膚特有的毛孔收縮與微小肌肉抽動，顯然缺乏實機拍攝應有的光學質感。這種過於平滑且對位略顯生硬的動態，絕對證實了其基於深偽技術的虛構本質。", 
        Negative: "目前的預測結果認為這段影片是 AI 生成的。然而，背景中建築的光影與路人的自然動態極其寫實，或許是與川普相似度極高的專業特邀演員進行的現場互動。這種具備真實場景深度的特徵可能潛在地說明預測不正確，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },
    { //高市與川普
        video: "u-UmfJ2nGFU", 
        filename: "22.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: false,
        nowtag: "未偵測到AI訊號。", 
        Positive: "這段影片確實為真實影片。相較於「AI 生成影片」，川普說話時細微的唇齒動作與頸部皮膚皺褶非常自然，顯然缺乏演算法生成時常見的嘴型與音訊不同步瑕疵。背景中精緻裝飾物對現場光線的複雜反射，絕對證實了這是物理環境下的真實錄影。", 
        Negative: "目前的預測結果認為這段影片是真實拍攝。然而，其對話內容的邏輯跳躍與敏感話題的銜接顯得過於突兀，或許是高品質 AI 進行深層偽造的虛擬對話。這種極致流暢但具爭議性的發言可能潛在地讓人懷疑其真實性，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },
    { //龍捲風 陷阱題：真實影片但AI提示說有AI訊號
        video: "FEBsmLRLy_0?feature=share", 
        filename: "23.MP4",
        type:"High_risk_Real",
        is_real: true,
        is_trap: true,
        nowtag: "AI資訊。", 
        Positive: "這段影片確實為 AI 生成。相較於「真實拍攝影片」，龍捲風漏斗雲與電線接觸時的電光反應過於規律，顯然缺乏自然界放電時的瞬態變化與環境感光過曝特徵。雲層頂端的旋轉中心與下方支柱的銜接邏輯，絕對證實了這是高品質模型模擬出的AI影片。", 
        Negative: "目前的預測結果認為這段影片是 AI 生成的。然而，車窗玻璃的反射殘影與晃動鏡頭的協調性非常自然，或許是攝影愛好者在特殊氣候下捕捉到的稀有奇觀。這種極具臨場感的鏡頭動態呈現可能潛在地讓人相信其為現場實拍，因此，此預測可能是不正確的。",
        answer: "真實影片" 
    },
    { //海嘯
        video: "xomffH4H_sU?feature=share", 
        filename: "24.MP4",
        type:"High_risk_AI",
        is_real: false,
        is_trap: false,
        nowtag: "AI資訊。", 
        Positive: "這段影片確實為 AI 生成。相較於「真實拍攝影片」，巨浪在吞噬街道時，水流與建築物邊緣的接觸點出現了像素閃爍與物件邏輯崩解的瑕疵。遠方海平面的波浪動態顯然缺乏真實物理碰撞時的隨機性，絕對證實了這是演算法虛構的動態產物。", 
        Negative: "目前的預測結果認為這段影片是 AI 生成的。然而，畫面中建築物倒塌時激起的煙塵與光影變化表現得極為細膩，或許是極致寫實的真實災難紀錄。這種高度擬真的環境細節可能潛在地讓人混淆其虛實，因此，此預測可能是不正確的。",
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
let lastTrustScore = 6; // 預設起始信任值
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
    if(!trust) return alert("請評分信任程度");

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
    if (lastTrustScore < 5) {
        // 低信任度 -> 給予「正面（對比）」解釋
        displayHint = q.Positive;
        currentHintType = "Positive";
    } else if (lastTrustScore > 8) {
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
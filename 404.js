strArr = [
    {
        id: "title", 
        en: `Not Found: ${err404}`, 
        ko: `찾을 수 없음: ${err404}`
    },
    {id: "translate", en: "Languages", ko: "언어"},
    {
        id: "missing[0]",
        en: "The document of this is somehow missing.",
        ko: "해당 요소에 관한 정보가 아직 작성되지 않았습니다."
    },
    {
        id: "redirect",
        en: "Redirect", ko: "리다이렉트"
    },
    {
        id: "redirect[0]",
        en: "There is a possibility that the one has been written.",
        ko: "이미 작성되어 있을 수도 있습니다."
    },
    {
        id: "redirect[1]",
        en: "The broken hyperlink represents I am so lazy that I have not written one yet.",
        ko: "작동하지 않는 링크는 저의 나태와 귀차니즘을 뜻합니다."
    },
    {
        id: "inquiry",
        en: "Inquiry",
        ko: "문의"
    },
    {
        id: "inquiry[0]",
        en: "Contact me to let me understand what I've screwed up so I could deep fry on it.",
        ko: "연락을 주셔서 제 문제를 찝어 주시면 해결하려고 시도하겠습니다."
    },
    {
        id: "discord",
        en: "The Discord Theatre",
        ko: "디스코드 서버"
    },
    {
        id: "discord[0]",
        en: "You could roast me here.",
        ko: "당신은 여기서 저를 튀겨먹을 수 있습니다."
    },
    {
        id: "discord[1]",
        en: "Invitation Link",
        ko: "초대 링크"
    }
];

function re404(name, root, url) {
    document.getElementById(`redirect[${name}]`).innerHTML = 
    `${name}: <a href="${root}/${url}" class="generic">${root}/${url}</a>`;
}
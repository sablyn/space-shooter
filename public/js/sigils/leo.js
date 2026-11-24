// Pisces: Space Journey. Copyright (c) 2024 An Nguyen. Licensed under the PolyForm Noncommercial License 1.0.0.
// Leo sigil data (EN + VI). Split out of the old monolithic
// js/sigils.js; loaded after js/sigils/core.js, which declares SIGIL_DEFS and
// SIGIL_I18N_VI as empty objects for every sigil file to assign its own entry into.

SIGIL_DEFS.leo = {
        name: 'Leo', element: 'Fire', color: '#EF9F27',
        buffs: [
            { id: 'su_tu_hong', name: "Lion's Roar", type: 'ATK', typeC: '#ef4444',
              desc: 'During GFJ, hits Burn enemies (30% ATK per stack every 0.5s, up to 3 stacks) and deal +1% of their lost HP. A Burning enemy that dies spreads its Burn to up to 6 nearby enemies.' },
            { id: 'than_menh', name: 'Divine Fate', type: 'SPEC', typeC: '#f59e0b',
              desc: "Each wave starts with every enemy petrified for 5s (Dominant) and taking +60% damage. With Lion's Roar, Burning kills fill a Fate meter worth up to +15% ATK. When full, Space or CHARGE petrifies every enemy for 3s, and petrified enemies shatter for 100% ATK when it ends." },
        ]
};

SIGIL_I18N_VI.leo = { name: 'Sư Tử', element: 'Hỏa', buffs: {
        su_tu_hong: { name: 'Sư Tử Hống', desc: 'Khi Glory for Justice bật, đòn đánh gây Bỏng (30% ATK mỗi lớp mỗi 0.5s, tối đa 3 lớp) và thêm 1% HP đã mất của mục tiêu. Kẻ địch chết khi đang Bỏng lan Bỏng sang tối đa 6 kẻ địch gần đó.' },
        than_menh: { name: 'Thần Mệnh', desc: 'Đầu mỗi wave, mọi kẻ địch hóa đá 5s (Áp Chế) và nhận thêm 60% sát thương. Có Sư Tử Hống thì hạ kẻ địch đang Bỏng nạp thanh Thần Mệnh, cho tối đa +15% ATK. Khi đầy, Space hoặc CHARGE hóa đá mọi kẻ địch 3s, hết hóa đá thì chúng vỡ ra chịu 100% ATK.' },
}};

SIGIL_I18N_ZH.leo = { name: '狮子座', element: '火', buffs: {
        su_tu_hong: { name: '狮子吼', desc: 'GFJ期间，命中使敌人燃烧（每层每0.5秒30% ATK伤害，上限3层），并造成其已损失生命值1%的额外伤害。燃烧中死亡的敌人会将燃烧传染给附近最多6名敌人。' },
        than_menh: { name: '神之命运', desc: '每波开始时，所有敌人石化5秒（压制）并受到伤害+60%。配合狮子吼，击杀燃烧敌人可积攒命运值，最高+15% ATK。积满后，按空格或蓄力可石化所有敌人3秒，石化结束时敌人碎裂，受到100% ATK伤害。' },
}};

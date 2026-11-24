// Pisces: Space Journey. Copyright (c) 2024 An Nguyen. Licensed under the PolyForm Noncommercial License 1.0.0.
// Virgo sigil data (EN + VI). Split out of the old monolithic
// js/sigils.js; loaded after js/sigils/core.js, which declares SIGIL_DEFS and
// SIGIL_I18N_VI as empty objects for every sigil file to assign its own entry into.

SIGIL_DEFS.virgo = {
        name: 'Virgo', element: 'Earth', color: '#4D9B2A',
        buffs: [
            { id: 'mui_ten_vang', name: 'Forest Guardian', type: 'ATK', typeC: '#ef4444',
              desc: 'Every 6th auto volley crits for 3x damage with Vulnerability, root and silence. With 5+ enemies on screen, a vine wrapped log sweeps the screen every 4s.' },
            { id: 'ky_su_dien', name: 'Circuit Engineer', type: 'SPEC', typeC: '#f59e0b',
              desc: 'Tesla damage +30%, and each destroyed Coil refunds Skill G charge. Enemies with any debuff take +25% damage from all sources.' },
        ]
};

SIGIL_I18N_VI.virgo = { name: 'Xử Nữ', element: 'Thổ', buffs: {
        mui_ten_vang: { name: 'Hộ Lâm', desc: 'Mỗi đợt bắn tự động thứ 6 chí mạng x3, gây Trọng Thương, trói và câm lặng. Khi có 5+ kẻ địch, mỗi 4s 1 khúc gỗ bọc dây leo quét ngang màn hình.' },
        ky_su_dien: { name: 'Kỹ Sư Mạch', desc: 'Sát thương Tesla +30%, mỗi Cuộn Tesla bị phá hoàn lại năng lượng Skill G. Kẻ địch mang bất kỳ hiệu ứng bất lợi nào nhận thêm 25% sát thương.' },
}};

SIGIL_I18N_ZH.virgo = { name: '处女座', element: '土', buffs: {
        mui_ten_vang: { name: '森林守护者', desc: '每第6次自动射击暴击，造成3倍伤害并附加易伤、定身与沉默。屏幕上有5名以上敌人时，每4秒有一根缠藤原木横扫全屏。' },
        ky_su_dien: { name: '电路工程师', desc: '特斯拉伤害+30%，每摧毁一个线圈返还技能G充能。带有任意减益的敌人受到所有来源伤害+25%。' },
}};

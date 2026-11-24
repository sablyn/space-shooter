// Pisces: Space Journey. Copyright (c) 2024 An Nguyen. Licensed under the PolyForm Noncommercial License 1.0.0.
// Taurus sigil data (EN + VI). Split out of the old monolithic
// js/sigils.js; loaded after js/sigils/core.js, which declares SIGIL_DEFS and
// SIGIL_I18N_VI as empty objects for every sigil file to assign its own entry into.

SIGIL_DEFS.taurus = {
        name: 'Taurus', element: 'Earth', color: '#4D9B2A',
        buffs: [
            { id: 'doi_hinh_chien', name: 'Yuusha Party', type: 'SPEC', typeC: '#f59e0b',
              desc: 'Summons a squad of 4 Sentinels (Tank, Support, Marksman, Mage) above you. They share Sentinel buffs, take bullets and piercing hits meant for you, and return 5s after falling.' },
            { id: 'hiep_luc', name: 'Squad Synergy', type: 'ATK', typeC: '#ef4444',
              desc: 'Every squad role fights: the Tank fires a piercing blade sweep, Support heals the weakest allies, the Marksman shoots piercing arrows and the Mage drops arcane zones.' },
        ]
};

SIGIL_I18N_VI.taurus = { name: 'Kim Ngưu', element: 'Thổ', buffs: {
        doi_hinh_chien: { name: 'Tổ Đội Dũng Giả', desc: 'Triệu hồi đội 4 Vệ Binh (Tank, Support, Marksman, Mage) phía trên bạn. Cả đội nhận buff của Vệ Binh, đỡ đạn và đòn xuyên nhắm vào bạn, gục thì 5s sau quay lại.' },
        hiep_luc: { name: 'Hiệp Lực Tổ Đội', desc: 'Mỗi vai trò đều chiến đấu: Tank phóng lưỡi chém xuyên, Support hồi máu đồng minh yếu nhất, Marksman bắn tên xuyên, Mage thả vùng phép arcane.' },
}};

SIGIL_I18N_ZH.taurus = { name: '金牛座', element: '土', buffs: {
        doi_hinh_chien: { name: '勇者小队', desc: '在你上方召唤4名哨兵小队（坦克、辅助、射手、法师）。他们共享哨兵增益，替你抵挡子弹与穿透攻击，阵亡5秒后归队。' },
        hiep_luc: { name: '小队协同', desc: '小队各司其职：坦克发射穿透剑气横扫，辅助治疗最虚弱的友军，射手发射穿透箭矢，法师投下奥术区域。' },
}};

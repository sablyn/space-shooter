// Pisces: Space Journey. Copyright (c) 2024 An Nguyen. Licensed under the PolyForm Noncommercial License 1.0.0.
// Pisces sigil data (EN + VI). Split out of the old monolithic
// js/sigils.js; loaded after js/sigils/core.js, which declares SIGIL_DEFS and
// SIGIL_I18N_VI as empty objects for every sigil file to assign its own entry into.

SIGIL_DEFS.pisces = {
        name: 'Pisces', element: 'Water', color: '#7F77DD',
        buffs: [
            { id: 'coi_mong', name: 'Dream Realm', type: 'SPEC', typeC: '#f59e0b',
              desc: 'Shift makes you immune for 2.5s and marks every enemy. Marked enemies then burst for part of the damage they took, up to 25% of their Max HP.' },
            { id: 'dong_chay_luan_hoi', name: 'Cycle of Flow', type: 'SPEC', typeC: '#f59e0b',
              desc: 'Kills and movement cut skill cooldowns. Each second actually refunded adds a Flow point. At 12 points, bubbles form a fish that swims straight through enemies for 65% ATK Piercing damage and stuns each one for 1s (Dominant). Stores 12 overflow points, up to 2 fish at once, at least 2s between summons. Skill G charges 35% faster; D, F and Overload Laser fire instantly.' },
        ]
};

SIGIL_I18N_VI.pisces = { name: 'Song Ngư', element: 'Thủy', buffs: {
        coi_mong: { name: 'Cõi Mộng', desc: 'Shift giúp bạn miễn sát thương 2.5s và đánh dấu mọi kẻ địch. Sau đó kẻ bị đánh dấu nổ ra theo phần sát thương đã nhận, tối đa 25% Max HP.' },
        dong_chay_luan_hoi: { name: 'Dòng Chảy Luân Hồi', desc: 'Hạ gục và di chuyển giảm hồi chiêu. Mỗi giây được rút thực sự cho 1 điểm Luân Hồi. Đủ 12 điểm, bọt nước tụ thành cá bơi thẳng xuyên địch, gây 65% ATK sát thương xuyên và làm choáng mỗi kẻ địch 1s (Áp Chế). Lưu thêm 12 điểm overload, tối đa 2 cá cùng lúc, cách nhau ít nhất 2s. Skill G nạp nhanh hơn 35%; D, F và Overload Laser bắn ngay.' },
}};

SIGIL_I18N_ZH.pisces = { name: '双鱼座', element: '水', buffs: {
        coi_mong: { name: '梦境', desc: 'Shift使你无敌2.5秒，并标记所有敌人。被标记的敌人随后会按所受伤害的一部分爆裂，最高为其最大生命值的25%。' },
        dong_chay_luan_hoi: { name: '轮回之流', desc: '击杀与移动可缩短技能冷却。每实际返还1秒冷却获得1点轮回值。积满12点，气泡汇成一条鱼直线穿过敌人，造成65% ATK穿透伤害并眩晕每个敌人1秒（压制）。可储存12点溢出值，最多同时存在2条鱼，召唤间隔至少2秒。技能G充能速度+35%；D、F与超载激光立即发射。' },
}};

// Pisces: Space Journey. Copyright (c) 2024 An Nguyen. Licensed under the PolyForm Noncommercial License 1.0.0.
// Cancer sigil data (EN + VI). Split out of the old monolithic
// js/sigils.js; loaded after js/sigils/core.js, which declares SIGIL_DEFS and
// SIGIL_I18N_VI as empty objects for every sigil file to assign its own entry into.

SIGIL_DEFS.cancer = {
        name: 'Cancer', element: 'Water', color: '#7F77DD',
        buffs: [
            { id: 'giap_nguyet', name: 'Lunar Aegis', type: 'DEF', typeC: '#3b82f6',
              desc: 'Gaia Protection works without GFJ, Gaia Barrier absorbs 30% more and Sentinels gain 15% evade. A killer whale finishes any enemy at 8% HP or below.' },
            { id: 'trieu_hoi', name: 'Tidal Flow', type: 'HEAL', typeC: '#22c55e',
              desc: 'Sentinels regenerate, heal 30% better, gain an Iron Body layer and come back if all fall. Blocked hits fill a tide meter; when full, Space or CHARGE summons whirlpools that drag enemies in (Dominant) and burst.' },
        ]
};

SIGIL_I18N_VI.cancer = { name: 'Cự Giải', element: 'Thủy', buffs: {
        giap_nguyet: { name: 'Nguyệt Giáp', desc: 'Gaia Protection chạy không cần Glory for Justice, Gaia Barrier hấp thụ thêm 30%, Vệ Binh +15% né. Cá voi sát thủ kết liễu mọi kẻ địch còn 8% HP trở xuống.' },
        trieu_hoi: { name: 'Triều Lưu', desc: 'Vệ Binh tự hồi máu, hồi máu tốt hơn 30%, có 1 lớp Iron Body và được gọi lại nếu chết hết. Đòn bị chặn nạp thanh triều; khi đầy, Space hoặc CHARGE tạo xoáy nước hút kẻ địch (Áp Chế) rồi nổ tung.' },
}};

SIGIL_I18N_ZH.cancer = { name: '巨蟹座', element: '水', buffs: {
        giap_nguyet: { name: '月之庇护', desc: '盖亚庇护无需GFJ即可生效，盖亚屏障吸收量+30%，哨兵闪避+15%。虎鲸会处决生命值8%及以下的敌人。' },
        trieu_hoi: { name: '潮汐涌流', desc: '哨兵持续回复生命，治疗效果+30%，获得一层铁躯，全部阵亡后可复活。格挡命中积攒潮汐值；积满后，按空格或蓄力可召唤漩涡，将敌人拖入（压制）并爆裂。' },
}};

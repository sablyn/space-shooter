// Pisces: Space Journey. Copyright (c) 2024 An Nguyen. Licensed under the PolyForm Noncommercial License 1.0.0.
// Dawn Herald data loads after the shared sigil definitions.

SIGIL_DEFS.dau = {
    name: 'Dawn Herald', element: 'Metal', color: '#FFD23F',
    buffs: [
        { id: 'kim_ke_bao_hieu', name: 'Daybreak Clarion', type: 'SPEC', typeC: '#f59e0b',
          desc: 'Every 10s the rooster crows: a ring of light erases enemy bullets, shoves enemies back (Dominant) and marks them with Daybreak for 4s (+20% damage taken, no evade). Daybreak kills hasten the next crow.' },
        { id: 'tu_hoa_cham', name: 'Starfall Needles', type: 'ATK', typeC: '#ef4444',
          desc: 'Erased bullets fly back as homing golden needles (60% ATK true damage). Seven star needles pin the 7 strongest enemies for 1.5s (200% ATK). Enemy skill shots the ring touches return to their caster.' },
    ]
};

SIGIL_I18N_VI.dau = { name: 'Mão Nhật Tinh Quan', element: 'Kim', buffs: {
    kim_ke_bao_hieu: { name: 'Kê Minh Phá Hiểu', desc: 'Mỗi 10s gà thần cất tiếng gáy: vòng sáng xóa đạn địch, đẩy lùi kẻ địch (Áp Chế) và gắn Rạng Đông 4s (nhận thêm 20% sát thương, không thể né). Hạ kẻ địch mang Rạng Đông giúp tiếng gáy kế tiếp đến sớm hơn.' },
    tu_hoa_cham: { name: 'Tú Hoa Châm', desc: 'Đạn bị tiếng gáy xóa bay ngược thành kim vàng tự tìm mục tiêu (60% ATK sát thương chuẩn). Bảy kim sao ghim 7 kẻ địch mạnh nhất 1.5s (200% ATK). Chiêu phóng của địch chạm vòng sáng bị phản về kẻ tung chiêu.' },
}};

SIGIL_I18N_ZH.dau = { name: '昴日星官', element: '金', buffs: {
    kim_ke_bao_hieu: { name: '破晓啼鸣', desc: '每10秒金鸡啼鸣：光环清除敌方子弹，击退敌人（压制），并为其附加破晓标记4秒（受到伤害+20%，无法闪避）。击杀带破晓标记的敌人可提前下一次啼鸣。' },
    tu_hoa_cham: { name: '星落金针', desc: '被清除的子弹化作追踪金针飞回（60% ATK真实伤害）。七根星针钉住最强的7名敌人1.5秒（200% ATK）。敌方技能弹触及光环后会返回施放者。' },
}};

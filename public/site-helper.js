(function() {
    'use strict';

    const siteConfig = {
        siteUrl: 'https://web-winscore.com',
        keyword: '捷报比分',
        version: '1.0.0'
    };

    function createCard(title, content) {
        const card = document.createElement('div');
        card.className = 'site-helper-card';
        card.style.cssText = 'background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px; padding: 16px; margin: 12px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);';
        const titleEl = document.createElement('h3');
        titleEl.textContent = title;
        titleEl.style.cssText = 'margin: 0 0 8px; font-size: 18px; color: #333;';
        const contentEl = document.createElement('p');
        contentEl.textContent = content;
        contentEl.style.cssText = 'margin: 0; color: #555; line-height: 1.5;';
        card.appendChild(titleEl);
        card.appendChild(contentEl);
        return card;
    }

    function createBadge(text) {
        const badge = document.createElement('span');
        badge.className = 'site-helper-badge';
        badge.textContent = text;
        badge.style.cssText = 'display: inline-block; background: #007bff; color: #fff; font-size: 12px; padding: 4px 8px; border-radius: 12px; margin: 4px;';
        return badge;
    }

    function createAccessNote() {
        const note = document.createElement('div');
        note.className = 'site-helper-note';
        note.style.cssText = 'background: #fff3cd; border: 1px solid #ffeeba; border-radius: 6px; padding: 12px; margin: 10px 0; color: #856404;';
        const noteTitle = document.createElement('strong');
        noteTitle.textContent = '访问说明：';
        note.appendChild(noteTitle);
        note.appendChild(document.createTextNode(' 本工具仅用于辅助展示，请确保访问 ' + siteConfig.siteUrl + ' 时遵守相关协议。'));
        return note;
    }

    function init() {
        const container = document.getElementById('site-helper-container');
        if (!container) {
            console.warn('未找到 #site-helper-container 容器，将追加到 body 末尾');
            const body = document.body;
            if (!body) return;
            const fallbackContainer = document.createElement('div');
            fallbackContainer.id = 'site-helper-container';
            fallbackContainer.style.cssText = 'max-width: 600px; margin: 20px auto; padding: 10px;';
            body.appendChild(fallbackContainer);
            renderUI(fallbackContainer);
        } else {
            renderUI(container);
        }
    }

    function renderUI(container) {
        container.innerHTML = '';

        const card1 = createCard('提示卡片', '欢迎使用 ' + siteConfig.keyword + ' 相关辅助功能。');
        container.appendChild(card1);

        const badgeContainer = document.createElement('div');
        badgeContainer.style.cssText = 'margin: 10px 0;';
        const badges = ['关键词', siteConfig.keyword, '提示', '辅助'];
        badges.forEach(function(tag) {
            badgeContainer.appendChild(createBadge(tag));
        });
        container.appendChild(badgeContainer);

        const note = createAccessNote();
        container.appendChild(note);

        const extraInfo = document.createElement('p');
        extraInfo.textContent = '当前版本：' + siteConfig.version + ' | 了解更多请访问 ' + siteConfig.siteUrl;
        extraInfo.style.cssText = 'font-size: 12px; color: #888; margin-top: 16px;';
        container.appendChild(extraInfo);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
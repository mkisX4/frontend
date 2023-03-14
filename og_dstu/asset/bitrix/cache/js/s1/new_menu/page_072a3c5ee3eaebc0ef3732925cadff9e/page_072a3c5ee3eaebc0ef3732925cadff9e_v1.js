
; /* Start:"a:4:{s:4:"full";s:74:"/local/components/dstu/services.index/templates/main/script.js?16069350052";s:6:"source";s:62:"/local/components/dstu/services.index/templates/main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/


/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/local/templates/new_menu/components/bitrix/news.list/videos_main/script.js?16112235212511";s:6:"source";s:75:"/local/templates/new_menu/components/bitrix/news.list/videos_main/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function add_news(last_news_date_id) {
    $.ajax({
        type:"POST",
        url: '/local/templates/new_menu/components/bitrix/news.list/media/ajax.php',
        data: {LAST_NEWS_DATE: last_news_date_id},
    }).done(function( msg ) {
        var ResJson = '', ResJsonButton, last_id;
        var json = $.parseJSON(msg);

        var countJson = json["ELEMENTS"].length-1;

        for (var i = 0; i <= countJson; i++) {
            ResJson += "<div class='long-block'>\n" +
                "    <div class='inside-block'>\n";

            if (json["ELEMENTS"][i]["image"]) {
                ResJson += " <div class='left-inside-block'>\n" +
                    "            <div class='image-block' style='background: url(" + json["ELEMENTS"][i]["image"] + "); background-size: contain; background-repeat: no-repeat;'></div>\n" +
                    "        </div>\n";
            }

            ResJson += " <div class='right-inside-block'>\n" +
                "            <div class='elements-block'>\n" +
                "                <div class='info-block'>\n" +
                "                    <span class='social-url'>\n" + json["ELEMENTS"][i]["links"]["name"] + "</span>\n" +
                "                    <span class='date'>" + json["ELEMENTS"][i]["date"] + "</span>\n" +
                "                </div>\n" +
                "                <div class='title'><a href='" + json["ELEMENTS"][i]["links"]["src"] + "'>" + json["ELEMENTS"][i]["title"] + "</a></div>\n" +
                "                <div class='text-block'>" + json["ELEMENTS"][i]["content"] + "</div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</div>";
        }

        last_date = json["TOTAL"]["LAST_DATE"];

        if (json["TOTAL"]["COUNT"] == 10) {
            $(".long-block.button").remove();
            $(".main-about-page").append(ResJson);
            ResJsonButton = '<div class="long-block button">\n' +
                '    <div class="ajax-button yellow-button">\n' +
                '        <button onclick="add_news(\''+last_date+'\');">Предыдущие новости</button>\n' +
                '    </div>\n' +
                '</div>';

            $(".main-about-page").append(ResJsonButton);
        } else {
            $(".long-block.button").remove();
            $(".main-about-page").append(ResJson);
        }

    });
}
/* End */
;; /* /local/components/dstu/services.index/templates/main/script.js?16069350052*/
; /* /local/templates/new_menu/components/bitrix/news.list/videos_main/script.js?16112235212511*/

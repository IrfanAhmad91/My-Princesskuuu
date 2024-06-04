$(document).ready(function () {
    /*
     * Main variables
     */
    var content = [{
        title: "Ini permintaan maaf akuu untuk yang kemarinn dan.....",
        desc: ""
    }, {
        title: "maaf",
        desc: "mungkin itu sebuah kalimat yg cukup simple, tapi percayalah jika seseorang telah mengucapkan itu pasti dia ingin agar semua permasalahan itu berakhir, bukan berarti dia lemah tapi dia sudah cukup cape(lelah dengan keadaan) dan masalah itu cepat selesai tidak terus-menerus."
    }, {
       title: "maaf",
       desc: "aku minta maaf atas apa yang telah aku bilang kemarin waktu pas kita lagi ribut besar dan keduanya tetap tidak mau mengalah, aku percaya walaupun aku dihina, dicaci, dan dikata2in sama kamu aku tetep tenang untuk menghadapi itu semua. tapi apabila kamu tak kunjung sadar bahwa itu salah aku akan berperilaku yang serupa agar kita sama-sama sadar bahwa yang di lakukan itu salah"
    }, {
        title: "maaf",
        desc: "maaf juga belum bisa menjadi orang yang kamu banggakan didepan keluarga kamu dan untuk kamu sendiri juga. aku juga sangat menyesal pernah bilang yang bikin kamu sakit hati aku minta maaf yaa sayangggg. aku juga selalu berusaha dan mengupayakan agar senantiasa sama aku have fun, bisa cerita random apapun itu, dan yang terpenting menjadi orang yang paling kamu sayangiii."
    }, {
        title: "1.",
        desc: "pada chapter pertama ini aku ingin bilang, tidak terasa semua yang telah suka maupun duka susah seneng kita lewati bersama marah atau seneng pun kita lewati bareng2 mau kamu lagi badmood atau aku yang badmood kita lewati itu sama-sama, dan tidak terasa semua itu kita jalani bareng-bareng hingga saat ini 9 bulan"
    }, {
        title: "2.",
        desc: "pada chapter kedua ini aku ingin bilang, hmm apalagi yaaa, terlalu banyak drama sampai saat ini dari yang biasa aja sampai ke yang bener2 saling diem2. bahkan ketika kita lagi marahan pun aku tetep mempercayai kamu dan meyakinkan kamu agar kita bisa melewati badai yang sedang menerpa ini dan aku yakin kita bisa lewati itu semuaaaaaaa."
    }, {
        title: "3.",
        desc: "pada chapter ketiga ini aku ingin bilang, akuu yakinnn ke kamuuu dan akuu percayaaa sama kamuuuu dan aku ga minta banyak-banyak atau neko cukup kamu selalu ada di samping aku dan yakinkan aku ketika aku sedang terpuruk yaa sayanggggkuuuu cintaaakkuuu myyy princesss kuuuuu, aku butuh kamuuuuuu ketika aku sedang terpuruk atau sedang hilang arah dan yang paling pentinggg ituuu kitaaaa samaaa-samaaa adaaaa ketika aku/kamu butuh sandarannn yaaa sayanggggggg"
    }, {
        title: "4.",
        desc: "terakhir. inti dari semua itu adalah. kita lewati apapun itu masalah nya bareng2 dan jangan pernah gengsi atau apapun itu jika merasa salah.. akuu juga berharap suatu saat nanti harapan dan cita-cita aku tercapai dan segera bisa men-khitbah kamuuu setelah ituu akadddd. semoga segala niat baik aku dan tujuan baik senantiasa diberi kemudahan dalam proses nyaaaa, aamiin. aku juga senantiasa mendukung/mensupport kamuuu jika itu baik untuk dari kamuuu, ingettt kamu juga punya cita-cita dan harapan yang tinggi karna kita sama-sama anak yang akan menjadi mendapat gelar sarjana/setingkat. akuuu yakinnn kamu kuattt, akuuu yakinnn kamu bisaaa, aku yakinnn dan yakinnn sama kamuuuuu. semoga apapun itu niat baik kita nanti dan segala impian serta harapan terwujud, aamiin."
    }, {
        title: "HAPPPYYY MENSIVEEEE 3>",
        desc: "aku hanya ingin bilang, Happyy Mensiveee yang ke 9 yaaa sayangggggg, wishhh akuuu. semoga kita di kuatkan dalam menhadapi cobaan kedepannya yaaa sayangggg dan inget hubungan ini kita bangun susah payah jangan ada orang yang mengganggu pukullll ajaaaa wkwkwkwk becandaaaa. jangan sampai masalah yang kecil membuat hubungan kita ini hancur dan selalu support aku/kamu pokoknya support barengggg-barengggggg yaaaa sayanggggg. akuuu udah kehabisan kataaaa-kataaa untuk bilang lagiiii. intinyaaa ada di slide setelah nyaaa >>>"
    }, {
        title: "Dear My Princess Hasna Syahida Amaniii",
        desc: "I LOVEEE UUUU MOREEE ETERNALLY MUACHHHH 3> 3> 3>"
 }        
];
    var currentPage = 0;
    //generate content
    for (var i = 0; i < content.length; i++) {
        //split content letters to array
        for (var obj in content[i]) {
            //if string
            if (typeof content[i][obj] === "string") {
                content[i][obj] = content[i][obj].split("");
                continue;
            }
            //if array (grouped text)
            else if (typeof content[i][obj] === "object") {
                var toPush = [];
                for (var j = 0; j < content[i][obj].length; j++) {
                    for (var k = 0; k < content[i][obj][j].length; k++) {
                        toPush.push(content[i][obj][j][k]);
                    }
                }
                content[i][obj] = toPush;
            }
        }
        //set text to 
        $("#segments").append("<div class=\"letters-wrap mutable\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
        setText();
        //clone to data
        $("#segments").append("<div class=\"letters-wrap position-data\"><div class=\"soup-title\"></div><div class=\"soup-desc\"></div></div>");
        setText();
    }
    //initial arrangement
    arrangeCurrentPage();
    scrambleOthers();
    /*
     * Event handlers
     */
    $(window).resize(function () {
        arrangeCurrentPage();
        scrambleOthers();
    });
    $("#soup-prev").hide();
    $("#soup-prev").click(function () {
        $("#soup-next").show();
        currentPage--;
        if (currentPage === 0) {
            $("#soup-prev").hide();
        }
        arrangeCurrentPage();
        scrambleOthers();
    });
    $("#soup-next").click(function () {
        $("#soup-prev").show();
        currentPage++;
        if (currentPage === content.length - 1) {
            $("#soup-next").hide();
        }
        arrangeCurrentPage();
        scrambleOthers();
    });
    /*
     * Functions
     */
    function arrangeCurrentPage() {
        for (var i = 0; i < content[currentPage].title.length; i++) {
            $(".mutable:eq(" + currentPage + ") > .soup-title > .letter").eq(i).css({
                left: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().left + "px",
                top: $(".position-data:eq(" + currentPage + ") > .soup-title > .letter").eq(i).offset().top + "px",
                color: "#111",
                zIndex: 9001
            });
        }
        for (var i = 0; i < content[currentPage].desc.length; i++) {
            $(".mutable:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).css({
                left: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().left + "px",
                top: $(".position-data:eq(" + currentPage + ") > .soup-desc > .letter").eq(i).offset().top + "px",
                color: "#111",
                zIndex: 9001
            });
        }
    }

    function setText() {
        var j;
        for (j = 0; j < content[i].title.length; j++) {
            $(".soup-title").last().append("<span class=\"letter\">" + content[i].title[j] + "</span>");
        }
        for (j = 0; j < content[i].desc.length; j++) {
            $(".soup-desc").last().append("<span class=\"letter\">" + content[i].desc[j] + "</span>");
        }
    }

    function scrambleOthers() {
        for (var i = 0; i < content.length; i++) {
            //don't scramble currentPage
            if (currentPage === i)
                continue;
            var parts = [
                ["title", ".soup-title"],
                ["desc", ".soup-desc"]
            ];
            //apply to .title h1s and .desc ps
            for (var j = 0; j < parts.length; j++) {
                for (var k = 0; k < content[i][parts[j][0]].length; k++) {
                    //define random position on screen
                    var randLeft = Math.floor(Math.random() * $(window).width());
                    var randTop = Math.floor(Math.random() * $(window).height());
                    //defining boundaries
                    var offset = $(".position-data").eq(currentPage).offset();
                    var bounds = {
                        left: offset.left,
                        top: offset.top,
                        right: $(window).width() - offset.left,
                        bottom: $(window).height() - offset.top
                    };
                    var middleX = bounds.left + $(".position-data").eq(currentPage).width() / 2;
                    var middleY = bounds.top + $(".position-data").eq(currentPage).height() / 2;
                    //finally, apply all the scrambles
                    $(".mutable:eq(" + i + ") > " + parts[j][1] + " > .letter").eq(k).css({
                        left: randLeft,
                        top: randTop,
                        color: "#DDD",
                        zIndex: "initial"
                    });
                }
            }
        }
    }
});

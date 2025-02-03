

$(document).ready(function () {

    showSchoolDataMain('modalDescShowSchool','北區');


});



var SchoolData_intTmpAA = 0;//第一次進來時秀分校時才要外層的div專用

var SchoolData_showDiv = "";//要顯示的地方

var SchoolData_dataStr = window.sessionStorage["schoolData4kidStr"];

var SchoolData_data = null;



//進入點
function showSchoolDataMain(tag , areaA) {
    
    SchoolData_showDiv = tag;

    
    //載入資料
    if (SchoolData_dataStr == undefined || SchoolData_dataStr == '')
    {
        $.post($("#SchoolDataList").val(), {}, function (ServerStr) {
            SchoolData_dataStr = ServerStr;
            //console.log(SchoolData_data);
            //暫存到session
            window.sessionStorage["schoolData4kidStr"] = SchoolData_dataStr;

            //秀資料
            showSchoolData_SetHtml(areaA, "", "");

            //將事件綁到縣市上
            showSchoolData_bindATag();
        })
    } else {
        //秀資料
        showSchoolData_SetHtml(areaA, "", "");

        //將事件綁到縣市上
        showSchoolData_bindATag();
    }

}





//進入點
function showSchoolData_SetHtml(areaA, areaB, areaC)
{
    if (SchoolData_dataStr != '') {
        SchoolData_data = JSON.parse(SchoolData_dataStr);
        
    } else {
        return;
    }

    if (SchoolData_data != null) {

        //清除原來的
        $("#" + SchoolData_showDiv).html("");

        var html = "";

        //<!-- Nav tabs -->
        html += '<ul class="nav nav-tabs" role="tablist">';
        html += '    <li role="presentation" ' + (areaA == '北區' ? 'class="active"' : '') + '><a href="#area_N" aria-controls="home" role="tab" data-toggle="tab" onclick="changeSchoolData1(\'北區\',\'\',\'\')">北部據點</a></li>';
        html += '    <li role="presentation" ' + (areaA == '中區' ? 'class="active"' : '') + '><a href="#area_C" aria-controls="profile" role="tab" data-toggle="tab" onclick="changeSchoolData1(\'中區\',\'\',\'\')">中部據點</a></li>';
        html += '    <li role="presentation" ' + (areaA == '南區' ? 'class="active"' : '') + '><a href="#area_S" aria-controls="messages" role="tab" data-toggle="tab" onclick="changeSchoolData1(\'南區\',\'\',\'\')">南部據點</a></li>';
        html += '    <li role="presentation" ' + (areaA == '東部' ? 'class="active"' : '') + '><a href="#area_S" aria-controls="messages" role="tab" data-toggle="tab" onclick="changeSchoolData1(\'東部\',\'\',\'\')">東部據點</a></li>';
        html += '</ul>';



        $(html).appendTo("#" + SchoolData_showDiv);
        
        showSchoolData_SetHtml2(areaA, areaB, areaC);
    }
}


//秀縣市tag
function showSchoolData_SetHtml2(areaA, areaB, areaC) {
    
    //<!-- Tab 縣市 -->
    var html = '';
    html += '      <div role="tabpanel" class="tab-pane active" id="area_N">';

    if (areaA == "北區") {

        areaB = areaB == '' ? SchoolData_data.北區.區域B[0] : areaB;

        html += '        <div style="background-color: #FFFFFF; width: 100%; margin: 0; padding: 0; text-align:left;">';
        html += '            <table class="table table-hover">';
        for (var i = 0; i < SchoolData_data.北區.區域B.length; i++) {
            html += '            <a style="line-height: 40px"  href="#" data-a="' + areaA + '" data-b="' + SchoolData_data.北區.區域B[i] + '" data-c="' + areaC + '"  >&nbsp;&nbsp;' + SchoolData_data.北區.區域B[i] + '</a>';
        }
        html += '            </table>';
        html += '        </div>';
        html += '        <p style="text-align: left;" ><img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S08.gif" width="25" title="基礎發音班">基礎發音班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S01.gif" width="25" title="基礎發音班">幼美班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S02.gif" width="25" title="基礎發音班">兒美班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S05.gif" width="25" title="基礎發音班">繪本班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S09.gif" width="25" title="基礎發音班">兒童文法班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S03.gif" width="25" title="基礎發音班">國中會考英聽班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S07.gif" width="25" title="全民英檢班">另附設英檢班課程 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S06.gif" width="25" title="全民英檢班">多益班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S10.gif" width="25" title="全民英檢班">學測班　<img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S11.gif" width="25" title="全民英檢班">統測班</p>';

        $(html).appendTo("#" + SchoolData_showDiv);

        showSchoolData_SetHtml3(areaA, areaB, areaC);

    }
    else if (areaA == "中區") {

        areaB = areaB == '' ? SchoolData_data.中區.區域B[0] : areaB;

        html += '        <div style="background-color: #FFFFFF; width: 100%; margin: 0; padding: 0; text-align:left;">';
        html += '            <table class="table table-hover">';
        for (var i = 0; i < SchoolData_data.中區.區域B.length; i++) {
            html += '            <a style="line-height: 19px"  href="#" data-a="' + areaA + '" data-b="' + SchoolData_data.中區.區域B[i] + '" data-c="' + areaC + '"   >&nbsp;&nbsp;' + SchoolData_data.中區.區域B[i] + '</a>';
        }
        html += '            </table>';
        html += '        </div>';
	html += '        <p style="text-align: left;" ><img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S08.gif" width="25" title="基礎發音班">基礎發音班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S01.gif" width="25" title="基礎發音班">幼美班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S02.gif" width="25" title="基礎發音班">兒美班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S05.gif" width="25" title="基礎發音班">繪本班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S09.gif" width="25" title="基礎發音班">兒童文法班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S03.gif" width="25" title="基礎發音班">國中會考英聽班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S07.gif" width="25" title="全民英檢班">另附設英檢班課程 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S06.gif" width="25" title="全民英檢班">多益班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S10.gif" width="25" title="全民英檢班">學測班　<img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S11.gif" width="25" title="全民英檢班">統測班</p>';

        $(html).appendTo("#" + SchoolData_showDiv);

        showSchoolData_SetHtml3(areaA, areaB, areaC);

    }
    else if (areaA == "南區") {

        areaB = areaB == '' ? SchoolData_data.南區.區域B[0] : areaB;

        html += '        <div style="background-color: #FFFFFF; width: 100%; margin: 0; padding: 0; text-align:left;">';
        html += '            <table class="table table-hover">';
        for (var i = 0; i < SchoolData_data.南區.區域B.length; i++) {
            html += '            <a style="line-height: 19px"  href="#" data-a="' + areaA + '" data-b="' + SchoolData_data.南區.區域B[i] + '" data-c="' + areaC + '"    >&nbsp;&nbsp;' + SchoolData_data.南區.區域B[i] + '</a>';
        }
        html += '            </table>';
        html += '        </div>';
	html += '        <p style="text-align: left;" ><img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S08.gif" width="25" title="基礎發音班">基礎發音班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S01.gif" width="25" title="基礎發音班">幼美班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S02.gif" width="25" title="基礎發音班">兒美班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S05.gif" width="25" title="基礎發音班">繪本班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S09.gif" width="25" title="基礎發音班">兒童文法班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S03.gif" width="25" title="基礎發音班">國中會考英聽班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S07.gif" width="25" title="全民英檢班">另附設英檢班課程 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S06.gif" width="25" title="全民英檢班">多益班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S10.gif" width="25" title="全民英檢班">學測班　<img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S11.gif" width="25" title="全民英檢班">統測班</p>';

        $(html).appendTo("#" + SchoolData_showDiv);

        showSchoolData_SetHtml3(areaA, areaB, areaC);
    }
    else if (areaA == "東部") {
        html += '        <!--<p>包含台東、花蓮等地區... ● (另附設英檢班課程分校)</p>-->';

        areaB = areaB == '' ? SchoolData_data.東部.區域B[0] : areaB;

        html += '        <div style="background-color: #FFFFFF; width: 100%; margin: 0; padding: 0; text-align:left;">';
        html += '            <table class="table table-hover">';
        for (var i = 0; i < SchoolData_data.東部.區域B.length; i++) {
            html += '            <a style="line-height: 19px"  href="#" data-a="' + areaA + '" data-b="' + SchoolData_data.東部.區域B[i] + '" data-c="' + areaC + '"    >&nbsp;&nbsp;' + SchoolData_data.東部.區域B[i] + '</a>';
        }
        html += '            </table>';
        html += '        </div>';
	html += '        <p style="text-align: left;" ><img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S08.gif" width="25" title="基礎發音班">基礎發音班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S01.gif" width="25" title="基礎發音班">幼美班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S02.gif" width="25" title="基礎發音班">兒美班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S05.gif" width="25" title="基礎發音班">繪本班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S09.gif" width="25" title="基礎發音班">兒童文法班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S03.gif" width="25" title="基礎發音班">國中會考英聽班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S07.gif" width="25" title="全民英檢班">另附設英檢班課程 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S06.gif" width="25" title="全民英檢班">多益班 <img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S10.gif" width="25" title="全民英檢班">學測班　<img src="https://e-learning.4kids.com.tw/Content/images/school/icon-S11.gif" width="25" title="全民英檢班">統測班</p>';

        $(html).appendTo("#" + SchoolData_showDiv);

        showSchoolData_SetHtml3(areaA, areaB, areaC);
    }
}


function showSchoolData_SetHtml3(areaA, areaB, areaC) {

    //先把前一次顯示的頁面刪掉
    $("#showSchoolDiv").remove();

    //alert(areaA+ " " + areaB  + " " + areaC);


    var html = "";
    html += '       <div class="bs-example" data-example-id="hoverable-table" style="background-color: #fff; border: #FFF solid 1px" id="showSchoolDiv">';
    html += '        <table class="table table-bordered table-hover">';
    html += '            <thead>';
    html += '                <tr>';
    html += '                    <th colspan="4" class="info">' + areaB + '<a name="bkm" id="1"></a></th>';
    html += '                </tr>';
    html += '            </thead>';
    html += '            <tbody>';

    //各區域
    for (var keyC in SchoolData_data[areaA].區域C[areaB]) {

        var _areaC = SchoolData_data[areaA].區域C[areaB][keyC];

        html += '                <tr>';
        html += '                    <td>';
        html += '                        <span class="showSchool-areaB" >' + _areaC + '</span>';

        //秀各分校
        for (var keySchool in SchoolData_data[areaA].分校[SchoolData_data[areaA].區域C[areaB][keyC]]) {
            var _school = SchoolData_data[areaA].分校[SchoolData_data[areaA].區域C[areaB][keyC]][keySchool];
            var _phone = SchoolData_data[areaA].分校資料[SchoolData_data[areaA].分校[SchoolData_data[areaA].區域C[areaB][keyC]][keySchool]]["phone"];
            var _address = SchoolData_data[areaA].分校資料[SchoolData_data[areaA].分校[SchoolData_data[areaA].區域C[areaB][keyC]][keySchool]]["address"];
            var _fbLink = SchoolData_data[areaA].分校資料[SchoolData_data[areaA].分校[SchoolData_data[areaA].區域C[areaB][keyC]][keySchool]]["fbLink"];
            var _googleLink = SchoolData_data[areaA].分校資料[SchoolData_data[areaA].分校[SchoolData_data[areaA].區域C[areaB][keyC]][keySchool]]["googleLink"];

            var _SchoolClass = SchoolData_data[areaA].分校資料[SchoolData_data[areaA].分校[SchoolData_data[areaA].區域C[areaB][keyC]][keySchool]]["班別"];
            

            html += '                        <span class="showSchool-dataField" >';
            html += '                            <font class="showSchool-title" >' + _school;

            html += '<span class="showSchool-icon" >';
            for (var _sclass in _SchoolClass)
            {
                
                 if (_SchoolClass[_sclass] == "基礎發音班") {
                    html += '<img src="http://e-learning.4kids.com.tw/Content/images/school/icon-S08.gif" width="25" title="' + _SchoolClass[_sclass] + '" />';
                }
                if (_SchoolClass[_sclass] == "幼美班") {
                    html += '<img src="http://e-learning.4kids.com.tw/Content/images/school/icon-S01.gif" width="25" title="' + _SchoolClass[_sclass] + '" />';
                }
                if (_SchoolClass[_sclass] == "兒美班") {
                    html += '<img src="http://e-learning.4kids.com.tw/Content/images/school/icon-S02.gif" width="25" title="' + _SchoolClass[_sclass] + '" />';
                }
                if (_SchoolClass[_sclass] == "繪本班") {
                    html += '<img src="http://e-learning.4kids.com.tw/Content/images/school/icon-S05.gif" width="25" title="' + _SchoolClass[_sclass] + '" />';
                }
                if (_SchoolClass[_sclass] == "兒童文法班") {
                    html += '<img src="http://e-learning.4kids.com.tw/Content/images/school/icon-S09.gif" width="25" title="' + _SchoolClass[_sclass] + '" />';
                }
                if (_SchoolClass[_sclass] == "國中會考英聽班") {
                    html += '<img src="http://e-learning.4kids.com.tw/Content/images/school/icon-S03.gif" width="25" title="' + _SchoolClass[_sclass] + '" />';
                }
                if (_SchoolClass[_sclass] == "全民英檢班") {
                    html += '<img src="http://e-learning.4kids.com.tw/Content/images/school/icon-S07.gif" width="25" title="' + _SchoolClass[_sclass] + '" />';
                }
                if (_SchoolClass[_sclass] == "多益班") {
                    html += '<img src="http://e-learning.4kids.com.tw/Content/images/school/icon-S06.gif" width="25" title="' + _SchoolClass[_sclass] + '" />';
                }
                if (_SchoolClass[_sclass] == "學測班") {
                    html += '<img src="http://e-learning.4kids.com.tw/Content/images/school/icon-S10.gif" width="25" title="' + _SchoolClass[_sclass] + '" />';
                }
                if (_SchoolClass[_sclass] == "統測班") {
                    html += '<img src="http://e-learning.4kids.com.tw/Content/images/school/icon-S11.gif" width="25" title="' + _SchoolClass[_sclass] + '" />';
                }

            }
            html += '</span>';

            html += '                            </font>';
            html += '                            <font class="showSchool-phone" >' + _phone + '</font>';
            html += '                            <font class="showSchool-address"  >' + _address + '</font>';

            if (_fbLink=='')
            {
                html += '                            <font style="width: 36px;float:right;">&nbsp;</font>';
            }else{
                html += '                            <font class="showSchool-fb"><a target="blank" href="' + _fbLink + '"><img src="https://www.4kids.com.tw/img/icon-FB.gif" alt="" /></a></font>';
            }
            
            if (_googleLink == '') {
                html += '                            <font style="width: 36px;float:right;">&nbsp;</font>';
            } else {
                html += '                            <font class="showSchool-gmap"><a target="blank" href="' + _googleLink + '"><img src="https://www.4kids.com.tw/img/icon-GoogleMap.gif" alt="" /></a></font>';
            }

            

            html += '                        </span>';

        }

        html += '                   </td>';
        html += '               </tr>';

    }


    html += '           </tbody>';
    html += '       </table>';

    html += '       </div>';

    $(html).appendTo("#" + SchoolData_showDiv);



}

//綁定事件(秀下面的分校資料)到縣市tag上
function showSchoolData_bindATag()
{
    $("#area_N").delegate("a", "click", function (event) {

        showSchoolData_SetHtml3($(this).attr("data-a"), $(this).attr("data-b"), $(this).attr("data-c"))

        event.preventDefault();
        return false;
    });

}

var SchoolDataObj;
function changeSchoolData1(area1, areaB, areaC) {
    showSchoolData_SetHtml(area1, areaB, areaC);
    showSchoolData_bindATag()
    return false;
}
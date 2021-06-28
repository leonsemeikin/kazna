function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkEmp() {
    let idemp = jQuery('#acf_employee input').val();
    let idnewemp = jQuery('#acf_newEmployee input').val();
    if (idemp) {
        atremployee = idemp;
        console.log('employeeEXIST')
    } else if (idnewemp) { atremployee = idnewemp; console.log('newEmployeeEXIST'); }
    else { atremployee = '' }
}

jQuery(document).ready(function () {
    try {
        let link;
        JQ('#acf_cf4').hide();
        //JQ('#acf_firstNameOperator').hide();
        //JQ('#acf_lastNameOperator').hide();
        //JQ('#acf_emailOperator').hide();
        //JQ('#acf_innOperator').hide();
        //JQ('#acf_newEmployee').hide();
        //JQ('#acf_employee').hide();
        //JQ('#acf_employeeOperator').hide();
        //jQuery('#acf_firstNameOperator input').val('Юнна');
        //jQuery('#acf_lastNameOperator input').val('Крылова');
        //jQuery('#acf_emailOperator input').val('KrulovaUS_@fsfk.local');





        //sleep(200).then(() => { document.getElementById('b1').click(); });
        JQ('#b1').hide();
        jQuery('#acf_cf3group001f_sw').click();
        jQuery('#acf_cf1group001f_sw').click();
        jQuery('#acf_cf2group001f_sw').click();
        atremployee = jQuery('#acf_employee input').val();

        //iframe запросы пользователя
        JQ('#acf_cf3group001f_sw').click(function () {
            checkEmp();
            let re = /.+\$/g;
            let emplnumber = atremployee.replace(re, '');
            if (emplnumber) {
                jQuery('#acf_fv1 iframe')[0].src = 'http://sm-sue.fsfk.local/sd/operator/?anchor=#uuid%3Aemployee%24' + emplnumber + '!%7B%22tab%22:%22b661b970-470d-404c-14f6-1144fae3f071,915d5924-e9a1-7262-ec81-3d08a3a87cf0%22%7D';

                //jQuery('#acf_fv1 iframe')[0].src = 'http://sm-sue.fsfk.local/sd/operator/#add%3AserviceCall%24request%3Aemployee%24' + emplnumber + '%3Arequest';
            }
            else { alert('Клиент по таким данным в SD не найден') }
        });
        //iframe запросы пользователя

        //iframe база знаний
        JQ('#acf_cf1group001f_sw').click(function () {
            atremployeeOperator = jQuery('#acf_employeeOperator input').val();
            let re = /.+\$/g;
            let empOperlnumber = atremployeeOperator.replace(re, '');
            jQuery('#acf_fv2 iframe')[0].src = 'http://sm-sue.fsfk.local/sd/operator/#uuid:employee$' + empOperlnumber + '!%7B%22tab%22:%22bb3c9c55-1787-2d08-c323-07a01ec644c6%22%7D'

        });

        //iframe создать запрос
        JQ('#acf_cf2group001f_sw').click(function () {
            //atremployee = jQuery('#acf_employee input').val();
            checkEmp();
            let re = /.+\$/g;
            let emplnumber = atremployee.replace(re, '');
            if (emplnumber) {
                jQuery('#acf_fv3 iframe')[0].src = 'http://sm-sue.fsfk.local/sd/operator/#add%3AserviceCall%24request%3Aemployee%24' + emplnumber + '%3Arequest!%7B%22fast%22:%22true%22%7D';
            }
            else { jQuery('#acf_fv3 iframe')[0].src = 'http://sm-sue.fsfk.local/sd/operator/#add%3AserviceCall%24request%3A%3Arequest!%7B%22fast%22:%22true%22%7D' }
        });


        //кнопка запросы
        JQ('#b2').click(function () {
            checkEmp();
            let re = /.+\$/g;
            let emplnumber = atremployee.replace(re, '');

            if (emplnumber) {
                link = 'http://sm-sue.fsfk.local/sd/operator/?anchor=#uuid%3Aemployee%24' + emplnumber + '!%7B%22tab%22:%22b661b970-470d-404c-14f6-1144fae3f071,915d5924-e9a1-7262-ec81-3d08a3a87cf0%22%7D';

                open_in_new_window(window.event, link, 'form', 1280, 1024);
            }
            else { alert('Клиент по таким данным в SD не найден') }
            //        else { link = 'http://sm-sue.fsfk.local/sd/operator/#' }
        });


        //кнопка создать запрос
        JQ('#b3').click(function () {
            //atremployee = jQuery('#acf_employee input').val();
            checkEmp();
            let re = /.+\$/g;
            let emplnumber = atremployee.replace(re, '');
            //let link = 'http://sm-sue.fsfk.local/sd/operator/#add:serviceCall$request:' + atremployee + ':request';

            if (emplnumber) {
                link = 'http://sm-sue.fsfk.local/sd/operator/#add%3AserviceCall%24request%3Aemployee%24' + emplnumber + '%3Arequest!%7B%22fast%22:%22true%22%7D';
            }
            else { link = 'http://sm-sue.fsfk.local/sd/operator/#add%3AserviceCall%24request%3A%3Arequest!%7B%22fast%22:%22true%22%7D' }


            console.log(link)
            open_in_new_window(window.event, link, 'form', 1280, 1024);
        });

        //кнопка база знаний
        JQ('#b4').click(function () {
            atremployeeOperator = jQuery('#acf_employeeOperator input').val();
            console.log(atremployeeOperator);
            let re = /.+\$/g;
            let empOperlnumber = atremployeeOperator.replace(re, '');
            console.log(empOperlnumber);
            link = 'http://sm-sue.fsfk.local/sd/operator/#uuid:employee$' + empOperlnumber + '!%7B%22tab%22:%22bb3c9c55-1787-2d08-c323-07a01ec644c6%22%7D'
            console.log(link)
            open_in_new_window(window.event, link, 'form', 1280, 1024);
        });

        //кнопка главная страница пупэ
        JQ('#b5').click(function () {
            link = 'http://sm-sue.fsfk.local/sd';
            open_in_new_window(window.event, link, 'form', 1280, 1024);
        });
    } catch { console.log("Что-то пошло не так") }
});

//обработчик на input поле 
// let target = JQ('#acf_lastNameOperator input')[0];
// let observer = new MutationObserver(function (mutations) {
//     mutations.forEach(function (mutation) {
//         console.log(mutation.type);
//         console.log('!!!!!!!!!!!!!!!!!!!!');
//         document.getElementById('b1').click();
//     });
// });
// let config = { attributes: true, childList: true, subtree: true, characterData: true, characterDataOldValue: true }
// observer.observe(target, config);

// let target = JQ('#acf_lastNameOperator input')[0];
// target.oninput = function () {
//     console.log('test!!!!!!!!!!!');
// };


try {
    let jsonInfoOperator = jQuery('#acf_etf1 p')[0].innerText;
    let jsonParse = JSON.parse(jsonInfoOperator);

    jQuery('#acf_firstNameOperator input').val(jsonParse["firstNameOperator"]);
    jQuery('#acf_lastNameOperator input').val(jsonParse["lastNameOperator"]);
    jQuery('#acf_emailOperator input').val(jsonParse["emailOperator"]);
    jQuery('#acf_innOperator input').val('7709895509');
    document.getElementById('b1').click();
} catch {
    console.log("Что-то пошло не так")
}
//btnCtrl.push(this);

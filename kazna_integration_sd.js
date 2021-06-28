const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const checkEmp = () => {
    let idemp = JQ('#acf_employee input').val();
    let idnewemp = JQ('#acf_newEmployee input').val();
    if (idemp) {
        atremployee = idemp;
    } else if (idnewemp) { atremployee = idnewemp; }
    else { atremployee = '' }
}

JQ(document).ready(function () {
    try {
        let link;
        JQ('#acf_cf4').hide();
        JQ('#b1').hide();
        jQ('#acf_cf3group001f_sw').click();
        jQ('#acf_cf1group001f_sw').click();
        jQ('#acf_cf2group001f_sw').click();
        atremployee = JQ('#acf_employee input').val();

        //iframe запросы пользователя
        JQ('#acf_cf3group001f_sw').click(function () {
            checkEmp();
            let re = /.+\$/g;
            let emplnumber = atremployee.replace(re, '');
            if (emplnumber) {
                JQ('#acf_fv1 iframe')[0].src = 'http://sm-sue.fsfk.local/sd/operator/?anchor=#uuid%3Aemployee%24' + emplnumber + '!%7B%22tab%22:%22b661b970-470d-404c-14f6-1144fae3f071,915d5924-e9a1-7262-ec81-3d08a3a87cf0%22%7D';
            }
            else { alert('Клиент по таким данным в SD не найден') }
        });

        //iframe база знаний
        JQ('#acf_cf1group001f_sw').click(function () {
            atremployeeOperator = JQ('#acf_employeeOperator input').val();
            let re = /.+\$/g;
            let empOperlnumber = atremployeeOperator.replace(re, '');
            JQ('#acf_fv2 iframe')[0].src = 'http://sm-sue.fsfk.local/sd/operator/#uuid:employee$' + empOperlnumber + '!%7B%22tab%22:%22bb3c9c55-1787-2d08-c323-07a01ec644c6%22%7D'
        });

        //iframe создать запрос
        JQ('#acf_cf2group001f_sw').click(function () {
            checkEmp();
            let re = /.+\$/g;
            let emplnumber = atremployee.replace(re, '');
            if (emplnumber) {
                JQ('#acf_fv3 iframe')[0].src = 'http://sm-sue.fsfk.local/sd/operator/#add%3AserviceCall%24request%3Aemployee%24' + emplnumber + '%3Arequest!%7B%22fast%22:%22true%22%7D';
            }
            else { JQ('#acf_fv3 iframe')[0].src = 'http://sm-sue.fsfk.local/sd/operator/#add%3AserviceCall%24request%3A%3Arequest!%7B%22fast%22:%22true%22%7D' }
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
        });

        //кнопка создать запрос
        JQ('#b3').click(function () {
            checkEmp();
            let re = /.+\$/g;
            let emplnumber = atremployee.replace(re, '');

            if (emplnumber) {
                link = 'http://sm-sue.fsfk.local/sd/operator/#add%3AserviceCall%24request%3Aemployee%24' + emplnumber + '%3Arequest!%7B%22fast%22:%22true%22%7D';
            }
            else { link = 'http://sm-sue.fsfk.local/sd/operator/#add%3AserviceCall%24request%3A%3Arequest!%7B%22fast%22:%22true%22%7D' }
            open_in_new_window(window.event, link, 'form', 1280, 1024);
        });

        //кнопка база знаний
        JQ('#b4').click(function () {
            atremployeeOperator = JQ('#acf_employeeOperator input').val();
            let re = /.+\$/g;
            let empOperlnumber = atremployeeOperator.replace(re, '');
            link = 'http://sm-sue.fsfk.local/sd/operator/#uuid:employee$' + empOperlnumber + '!%7B%22tab%22:%22bb3c9c55-1787-2d08-c323-07a01ec644c6%22%7D'
            open_in_new_window(window.event, link, 'form', 1280, 1024);
        });

        //кнопка главная страница пупэ
        JQ('#b5').click(function () {
            link = 'http://sm-sue.fsfk.local/sd';
            open_in_new_window(window.event, link, 'form', 1280, 1024);
        });
    } catch { console.log("Что-то пошло не так") }
});


try {
    let jsonInfoOperator = JQ('#acf_etf1 p')[0].innerText;
    let jsonParse = JSON.parse(jsonInfoOperator);

    JQ('#acf_firstNameOperator input').val(jsonParse["firstNameOperator"]);
    JQ('#acf_lastNameOperator input').val(jsonParse["lastNameOperator"]);
    JQ('#acf_emailOperator input').val(jsonParse["emailOperator"]);
    JQ('#acf_innOperator input').val('7709895509');
    document.getElementById('b1').click();
} catch {
    console.log("Что-то пошло не так")
}
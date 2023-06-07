const minDate = (monthOffset) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1 + monthOffset; //January is 0
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    if (monthOffset !== 0) {

        let copyToday = new Date(today);
        let ddCopyToday = copyToday.getDate();

        if (dd !== ddCopyToday) {
            copyToday.setDate(copyToday.getDate() - 1);
        }

        ddCopyToday = copyToday.getDate();
        let mmCopyToday = copyToday.getMonth() + 1; //January is 0
        let yyyyCopyToday = copyToday.getFullYear();

        if (ddCopyToday < 10) {
            ddCopyToday = '0' + ddCopyToday;
        }

        if (mmCopyToday < 10) {
            mmCopyToday = '0' + mmCopyToday;
        }
        copyToday = yyyyCopyToday + '-' + mmCopyToday + '-' + ddCopyToday;

        return copyToday;
    }
    return today;
}

export default {
    minDate: minDate
}

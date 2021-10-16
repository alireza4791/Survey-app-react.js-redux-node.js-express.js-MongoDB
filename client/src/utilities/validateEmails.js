const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
    let emails_noComma;
    if(emails.charAt(emails.length-1) === ','){
        emails_noComma = emails.substring(0, emails.length - 1);
    }else{
        emails_noComma = emails;
    }
    const Invalid_Emails = emails_noComma
        .split(',')
        .map(email => email.trim())
        .filter(email => !regex.test(email));

        if(Invalid_Emails.length) {
            return `These emails are invalid: ${Invalid_Emails}`;
        }

        return null;
}
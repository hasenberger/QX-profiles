
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://172.16.2.100:801/eportal/?c=ACSetting&a=Login&protocol=http:&hostname=172.16.2.100&iTermType=2&wlanuserip=10.32.216.161&wlanacip=null&wlanacname=null&mac=00-00-00-00-00-00&ip=10.32.216.161&enAdvert=0&queryACIP=0&loginMethod=1`;
const method = `POST`;
const headers = {
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate`,
'Upgrade-Insecure-Requests' : `1`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Origin' : `http://172.16.2.100`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1`,
'Cookie' : `ISP_select=@cmcc; md5_login2=%2C1%2C2019028085207018@cmcc%7Chrttd34v; ip=10.32.216.161; program=test; PHPSESSID=msbsh212nfmungt7kf7khnv021; areaID=null; ssid=null; vlan=0`,
'Host' : `172.16.2.100:801`,
'Referer' : `http://172.16.2.100/`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`,
'Accept' : `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
};
const body = `DDDDD=%2C1%2C2019028085207018%40cmcc&upass=hrttd34v&R1=0&R2=0&R3=0&R6=1&para=00&0MKKey=123456&buttonClicked=&redirect_url=&err_flag=&username=&password=&user=&cmd=&Login=`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

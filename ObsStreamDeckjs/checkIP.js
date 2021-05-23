import fs from 'fs'

export function getIpAddress()
{
    fs.readFile("./.save_ip", 'utf-8', (err, data) => {
        if (err)
        {
            return console.log("Couln't Read file: " + err);
        }
        return data;
    });
}

export function SaveIpAddress(ip) {
    fs.writeFile("./.save_ip", ip, (err) => {
        if (err)
        {
            console.error("Coudn't write into file");
            return console.error(err);
        }
    });
}
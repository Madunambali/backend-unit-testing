export default function regCheck(regNumber, locationCode) {
    return regNumber.endsWith(locationCode);
}
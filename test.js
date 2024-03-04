import http from "k6/http";

export default function() {
  http.get("https://34.105.82.93/listings");
};
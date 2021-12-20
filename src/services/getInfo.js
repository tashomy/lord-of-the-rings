import React from "react";

export default async function moviesGet() {
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
  };
  let res = await fetch("https://the-one-api.dev/v2/movie", {
    headers: headers,
  });
  let json = await res.json();
  return json;
}

export async function booksGet() {
  let res = await fetch("https://the-one-api.dev/v2/book");
  let json = await res.json();
  return json;
}

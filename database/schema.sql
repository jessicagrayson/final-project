set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

-- Below is my code from dbdiagram

CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "username" text,
  "hashedPassword" text,
  "signUpDate" timestamptz
);

CREATE TABLE "entries" (
  "userId" int,
  "entryId" serial PRIMARY KEY,
  "imageUrl" text,
  "location" text,
  "travelDate" timestamptz,
  "blurb" text
);

ALTER TABLE "entries" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

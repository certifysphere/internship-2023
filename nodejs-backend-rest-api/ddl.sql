-- Database: public-restrooms-db

-- DROP DATABASE IF EXISTS "public-restrooms-db";

CREATE DATABASE "public-restrooms-db"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- Table: public.publicToilets

-- DROP TABLE IF EXISTS public."publicToilets";

CREATE TABLE IF NOT EXISTS public."publicToilets"
(
    email text COLLATE pg_catalog."default" NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    gender text COLLATE pg_catalog."default",
    address text COLLATE pg_catalog."default" NOT NULL,
    landmark text COLLATE pg_catalog."default",
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    CONSTRAINT "publicToilets_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."publicToilets"
    OWNER to postgres;
-- DROP SCHEMA "event";

CREATE SCHEMA "event" AUTHORIZATION postgres;
-- "event".gathering definition

-- Drop table

-- DROP TABLE "event".gathering;

CREATE TABLE "event".gathering (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar(1024) NULL,
	description varchar(4096) NULL,
	start_time timestamptz NULL,
	end_date timestamptz NULL,
	CONSTRAINT gathering_pk PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE "event".gathering OWNER TO postgres;
GRANT ALL ON TABLE "event".gathering TO postgres;


-- "event"."location" definition

-- Drop table

-- DROP TABLE "event"."location";

CREATE TABLE "event"."location" (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar(1024) NULL,
	description varchar(4096) NULL,
	CONSTRAINT location_pk PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE "event"."location" OWNER TO postgres;
GRANT ALL ON TABLE "event"."location" TO postgres;


-- "event".participant definition

-- Drop table

-- DROP TABLE "event".participant;

CREATE TABLE "event".participant (
	id uuid NOT NULL DEFAULT uuid_generate_v4(),
	"name" varchar(1024) NULL,
	CONSTRAINT participant_pk PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE "event".participant OWNER TO postgres;
GRANT ALL ON TABLE "event".participant TO postgres;


-- "event".gathering_location definition

-- Drop table

-- DROP TABLE "event".gathering_location;

CREATE TABLE "event".gathering_location (
	gathering_id uuid NOT NULL,
	location_id uuid NOT NULL,
	CONSTRAINT gathering_location_pkey PRIMARY KEY (gathering_id, location_id),
	CONSTRAINT fk_gathering FOREIGN KEY (gathering_id) REFERENCES "event".gathering(id),
	CONSTRAINT fk_location FOREIGN KEY (location_id) REFERENCES "event"."location"(id)
);

-- Permissions

ALTER TABLE "event".gathering_location OWNER TO postgres;
GRANT ALL ON TABLE "event".gathering_location TO postgres;


-- "event".participant_gathering definition

-- Drop table

-- DROP TABLE "event".participant_gathering;

CREATE TABLE "event".participant_gathering (
	participant_id uuid NOT NULL,
	gathering_id uuid NOT NULL,
	CONSTRAINT participant_gathering_pkey PRIMARY KEY (participant_id, gathering_id),
	CONSTRAINT fk_gathering FOREIGN KEY (gathering_id) REFERENCES "event".gathering(id),
	CONSTRAINT fk_participant FOREIGN KEY (participant_id) REFERENCES "event".participant(id)
);

-- Permissions

ALTER TABLE "event".participant_gathering OWNER TO postgres;
GRANT ALL ON TABLE "event".participant_gathering TO postgres;




-- Permissions

GRANT ALL ON SCHEMA "event" TO postgres;

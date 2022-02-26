SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: eval_movement_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public.eval_movement_type AS ENUM (
    'IN',
    'OUT'
);


--
-- Name: adjust_count(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.adjust_count() RETURNS trigger
    LANGUAGE plpgsql
    AS $$ 

DECLARE BEGIN IF TG_OP = 'INSERT' THEN EXECUTE 'UPDATE row_counts set reltuples=reltuples +1 where relname = ''' || TG_RELNAME || '''';
RETURN NEW;
ELSIF TG_OP = 'DELETE' THEN EXECUTE 'UPDATE row_counts set reltuples=reltuples -1 where relname = ''' || TG_RELNAME || '''';
RETURN OLD;
END IF;
END;

$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: active_storage_attachments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.active_storage_attachments (
    id bigint NOT NULL,
    name character varying NOT NULL,
    record_type character varying NOT NULL,
    record_id bigint NOT NULL,
    blob_id bigint NOT NULL,
    created_at timestamp without time zone NOT NULL
);


--
-- Name: active_storage_attachments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.active_storage_attachments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: active_storage_attachments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.active_storage_attachments_id_seq OWNED BY public.active_storage_attachments.id;


--
-- Name: active_storage_blobs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.active_storage_blobs (
    id bigint NOT NULL,
    key character varying NOT NULL,
    filename character varying NOT NULL,
    content_type character varying,
    metadata text,
    service_name character varying NOT NULL,
    byte_size bigint NOT NULL,
    checksum character varying NOT NULL,
    created_at timestamp without time zone NOT NULL
);


--
-- Name: active_storage_blobs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.active_storage_blobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: active_storage_blobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.active_storage_blobs_id_seq OWNED BY public.active_storage_blobs.id;


--
-- Name: active_storage_variant_records; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.active_storage_variant_records (
    id bigint NOT NULL,
    blob_id bigint NOT NULL,
    variation_digest character varying NOT NULL
);


--
-- Name: active_storage_variant_records_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.active_storage_variant_records_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: active_storage_variant_records_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.active_storage_variant_records_id_seq OWNED BY public.active_storage_variant_records.id;


--
-- Name: activity_logs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.activity_logs (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    browser character varying,
    ip_address character varying,
    controller character varying NOT NULL,
    action character varying NOT NULL,
    params character varying,
    note character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: activity_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.activity_logs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: activity_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.activity_logs_id_seq OWNED BY public.activity_logs.id;


--
-- Name: algorithm_algorithm_calculators; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.algorithm_algorithm_calculators (
    id bigint NOT NULL,
    algorithm_id bigint NOT NULL,
    algorithm_calculator_id bigint NOT NULL,
    abscissa boolean DEFAULT false NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: algorithm_algorithm_calculators_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.algorithm_algorithm_calculators_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: algorithm_algorithm_calculators_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.algorithm_algorithm_calculators_id_seq OWNED BY public.algorithm_algorithm_calculators.id;


--
-- Name: algorithm_calculator_conditional_vars; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.algorithm_calculator_conditional_vars (
    id bigint NOT NULL,
    algorithm_calculator_id bigint NOT NULL,
    conditional_var_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: algorithm_calculator_conditional_vars_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.algorithm_calculator_conditional_vars_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: algorithm_calculator_conditional_vars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.algorithm_calculator_conditional_vars_id_seq OWNED BY public.algorithm_calculator_conditional_vars.id;


--
-- Name: algorithm_calculators; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.algorithm_calculators (
    id bigint NOT NULL,
    name character varying NOT NULL,
    presentation character varying NOT NULL,
    result_type character varying NOT NULL,
    value character varying NOT NULL,
    abscissa character varying NOT NULL,
    abscissa_min double precision NOT NULL,
    abscissa_max double precision NOT NULL,
    abscissa_intervall double precision NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    default_input_value double precision DEFAULT 1.01 NOT NULL
);


--
-- Name: algorithm_calculators_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.algorithm_calculators_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: algorithm_calculators_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.algorithm_calculators_id_seq OWNED BY public.algorithm_calculators.id;


--
-- Name: algorithms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.algorithms (
    id bigint NOT NULL,
    name character varying NOT NULL,
    presentation character varying NOT NULL,
    eq character varying NOT NULL,
    "default" boolean DEFAULT false NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: algorithms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.algorithms_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: algorithms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.algorithms_id_seq OWNED BY public.algorithms.id;


--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: audits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.audits (
    id bigint NOT NULL,
    auditable_id integer,
    auditable_type character varying,
    associated_id integer,
    associated_type character varying,
    user_id integer,
    user_type character varying,
    username character varying,
    action character varying,
    audited_changes jsonb,
    version integer DEFAULT 0,
    comment character varying,
    remote_address character varying,
    request_uuid character varying,
    created_at timestamp without time zone
);


--
-- Name: audits_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.audits_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: audits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.audits_id_seq OWNED BY public.audits.id;


--
-- Name: comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comments (
    id bigint NOT NULL,
    related_country_id bigint NOT NULL,
    user_id bigint NOT NULL,
    subject character varying NOT NULL,
    body text NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: condition_items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.condition_items (
    id bigint NOT NULL,
    conditional_var_id bigint NOT NULL,
    field_operator character varying NOT NULL,
    field_value character varying NOT NULL,
    eq character varying NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: condition_items_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.condition_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: condition_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.condition_items_id_seq OWNED BY public.condition_items.id;


--
-- Name: conditional_vars; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.conditional_vars (
    id bigint NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: conditional_vars_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.conditional_vars_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: conditional_vars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.conditional_vars_id_seq OWNED BY public.conditional_vars.id;


--
-- Name: configurables; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.configurables (
    id bigint NOT NULL,
    name character varying,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: configurables_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.configurables_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: configurables_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.configurables_id_seq OWNED BY public.configurables.id;


--
-- Name: customer_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.customer_categories (
    id bigint NOT NULL,
    name character varying NOT NULL,
    base_risk double precision NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: customer_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.customer_categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: customer_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.customer_categories_id_seq OWNED BY public.customer_categories.id;


--
-- Name: customer_category_conditional_vars; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.customer_category_conditional_vars (
    id bigint NOT NULL,
    customer_category_id bigint NOT NULL,
    conditional_var_id bigint NOT NULL,
    value double precision NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    "default" boolean DEFAULT false NOT NULL
);


--
-- Name: customer_category_conditional_vars_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.customer_category_conditional_vars_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: customer_category_conditional_vars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.customer_category_conditional_vars_id_seq OWNED BY public.customer_category_conditional_vars.id;


--
-- Name: customer_evaluations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.customer_evaluations (
    id bigint NOT NULL,
    anagrafica_id integer NOT NULL,
    eval_year integer NOT NULL,
    eval_month smallint NOT NULL,
    nr_movements integer DEFAULT 0 NOT NULL,
    last_attention_factor7 double precision,
    last_attention_factor30 double precision,
    eval_days jsonb DEFAULT '"{}"'::jsonb NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: customer_evaluations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.customer_evaluations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: customer_evaluations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.customer_evaluations_id_seq OWNED BY public.customer_evaluations.id;


--
-- Name: customer_settings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.customer_settings (
    id bigint NOT NULL,
    active boolean DEFAULT true NOT NULL,
    customer_id integer NOT NULL,
    product_id integer DEFAULT 0 NOT NULL,
    tollerance double precision DEFAULT 1.0 NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: customer_settings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.customer_settings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: customer_settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.customer_settings_id_seq OWNED BY public.customer_settings.id;


--
-- Name: eval_customers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.eval_customers (
    id bigint NOT NULL,
    anagrafica_id integer NOT NULL,
    eval_year integer NOT NULL,
    eval_month smallint NOT NULL,
    nr_movements integer DEFAULT 0 NOT NULL,
    last_attention_factor7 double precision,
    last_attention_factor30 double precision,
    eval_days jsonb DEFAULT '"{}"'::jsonb NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: eval_customers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.eval_customers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: eval_customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.eval_customers_id_seq OWNED BY public.eval_customers.id;


--
-- Name: evaluated_movements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.evaluated_movements (
    id bigint NOT NULL,
    triggerable_id bigint NOT NULL,
    triggerable_type character varying NOT NULL,
    triggerable_status character varying NOT NULL,
    in_out public.eval_movement_type DEFAULT 'OUT'::public.eval_movement_type,
    internal boolean DEFAULT false NOT NULL,
    customer_id integer NOT NULL,
    movement_id integer NOT NULL,
    movement_created_at timestamp without time zone NOT NULL,
    product_id integer,
    product_net_id integer,
    product_table_code integer,
    product_name character varying,
    product_base_risk double precision,
    payer character varying,
    payer_iban character varying(50),
    payer_card character varying(50),
    payer_other character varying,
    beneficiary character varying,
    beneficiary_iban character varying(50),
    beneficiary_card character varying(50),
    beneficiary_other character varying,
    risk_factor double precision,
    risk_description character varying,
    recursion_customer_7 integer,
    recursion_customer_30 integer,
    recursion_all_7 integer,
    recursion_all_30 integer,
    amount_cents integer DEFAULT 0 NOT NULL,
    amount_currency character varying DEFAULT 'EUR'::character varying NOT NULL,
    origin_lonlat public.geography(Point,4326),
    destination_lonlat public.geography(Point,4326),
    origin_country character varying NOT NULL,
    destination_country character varying NOT NULL,
    lock_version integer DEFAULT 0 NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    evaluated_factor7 double precision,
    evaluated_factor30 double precision,
    reason text
);


--
-- Name: evaluated_movements_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.evaluated_movements_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: evaluated_movements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.evaluated_movements_id_seq OWNED BY public.evaluated_movements.id;


--
-- Name: messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.messages (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    content text NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: notifications; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.notifications (
    id bigint NOT NULL,
    recipient_type character varying NOT NULL,
    recipient_id bigint NOT NULL,
    type character varying NOT NULL,
    params json,
    read_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    deleted_at timestamp without time zone
);


--
-- Name: notifications_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.notifications_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: notifications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.notifications_id_seq OWNED BY public.notifications.id;


--
-- Name: observed_elements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.observed_elements (
    id bigint NOT NULL,
    category_element character varying NOT NULL,
    content character varying NOT NULL,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    common_process boolean DEFAULT false NOT NULL
);


--
-- Name: observed_elements_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.observed_elements_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: observed_elements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.observed_elements_id_seq OWNED BY public.observed_elements.id;


--
-- Name: places; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.places (
    id bigint NOT NULL,
    positionable_type character varying NOT NULL,
    positionable_id bigint NOT NULL,
    name character varying,
    address character varying,
    city character varying,
    region character varying,
    country character varying,
    lonlat public.geography(Point,4326),
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: places_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.places_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: places_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.places_id_seq OWNED BY public.places.id;


--
-- Name: queue_customers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.queue_customers (
    id bigint NOT NULL,
    customer_id integer NOT NULL,
    evaluated_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: queue_customers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.queue_customers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: queue_customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.queue_customers_id_seq OWNED BY public.queue_customers.id;


--
-- Name: related_countries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.related_countries (
    id bigint NOT NULL,
    continent character varying,
    region character varying,
    subregion character varying,
    name character varying,
    unofficial_names text[] DEFAULT '{}'::text[],
    gec character varying,
    alpha2 character varying NOT NULL,
    alpha3 character varying NOT NULL,
    world_region character varying,
    in_eu boolean,
    in_eea boolean,
    in_esm boolean,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    kyc_score double precision,
    eval_kyc_score double precision,
    basel_score double precision,
    eval_basel_score double precision,
    corruption_perception double precision,
    eval_corruption_perception double precision,
    gray_or_black_list integer,
    attention_factor double precision,
    iso_numeric integer
);


--
-- Name: related_countries_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.related_countries_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: related_countries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.related_countries_id_seq OWNED BY public.related_countries.id;


--
-- Name: reports; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.reports (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    name character varying,
    opts jsonb DEFAULT '"{}"'::jsonb NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: reports_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.reports_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: reports_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.reports_id_seq OWNED BY public.reports.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(255) DEFAULT NULL::character varying NOT NULL,
    presentation character varying(255) DEFAULT NULL::character varying,
    description character varying(255) DEFAULT NULL::character varying,
    policy smallint DEFAULT 99 NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    active smallint DEFAULT 1 NOT NULL
);


--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: row_counts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.row_counts (
    relname text NOT NULL,
    reltuples bigint
);


--
-- Name: sanction_list_items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sanction_list_items (
    id bigint NOT NULL,
    sanction_list_id bigint NOT NULL,
    file_generation_date character varying,
    entity_logical_id character varying,
    entity_eu_reference_number character varying,
    entity_united_nation_id character varying,
    entity_designation_date character varying,
    entity_designation_details character varying,
    entity_remark character varying,
    entity_subject_type character varying,
    entity_subject_type_classification_code character varying,
    entity_regulation_type character varying,
    entity_regulation_organisation_type character varying,
    entity_regulation_publication_date character varying,
    entity_regulation_entry_into_force_date character varying,
    entity_regulation_number_title character varying,
    entity_regulation_programme character varying,
    entity_regulation_publication_url character varying,
    name_alias_last_name character varying,
    name_alias_first_name character varying,
    name_alias_middle_name character varying,
    name_alias_whole_name character varying,
    name_alias_name_language character varying,
    name_alias_gender character varying,
    name_alias_title character varying,
    name_alias_function character varying,
    name_alias_logical_id character varying,
    name_alias_regulation_language character varying,
    name_alias_remark character varying,
    name_alias_regulation_type character varying,
    name_alias_regulation_organisation_type character varying,
    name_alias_regulation_publication_date character varying,
    name_alias_regulation_entry_into_force_date character varying,
    name_alias_regulation_number_title character varying,
    name_alias_regulation_programme character varying,
    name_alias_regulation_publication_url character varying,
    address_city character varying,
    address_street character varying,
    address_po_box character varying,
    address_zip_code character varying,
    address_region character varying,
    address_place character varying,
    address_as_at_listing_time character varying,
    address_contact_info character varying,
    address_country_iso2_code character varying,
    address_country_description character varying,
    address_logical_id character varying,
    address_regulation_language character varying,
    address_remark character varying,
    address_regulation_type character varying,
    address_regulation_organisation_type character varying,
    address_regulation_publication_date character varying,
    address_regulation_entry_into_force_date character varying,
    address_regulation_number_title character varying,
    address_regulation_programme character varying,
    address_regulation_publication_url character varying,
    birth_date_birth_date character varying,
    birth_date_day character varying,
    birth_date_month character varying,
    birth_date_year character varying,
    birth_date_year_range_from character varying,
    birth_date_year_range_to character varying,
    birth_date_circa character varying,
    birth_date_calendar_type character varying,
    birth_date_zip_code character varying,
    birth_date_region character varying,
    birth_date_place character varying,
    birth_date_city character varying,
    birth_date_country_iso2_code character varying,
    birth_date_country_description character varying,
    birth_date_logical_id character varying,
    birth_date_regulation_language character varying,
    birth_date_remark character varying,
    birth_date_regulation_type character varying,
    birth_date_regulation_organisation_type character varying,
    birth_date_regulation_publication_date character varying,
    birth_date_regulation_entry_into_force_date character varying,
    birth_date_regulation_number_title character varying,
    birth_date_regulation_programme character varying,
    birth_date_regulation_publication_url character varying,
    identification_number character varying,
    identification_diplomatic character varying,
    identification_known_expired character varying,
    identification_known_false character varying,
    identification_reported_lost character varying,
    identification_revoked_by_issuer character varying,
    identification_issued_by character varying,
    identification_issued_date character varying,
    identification_valid_from character varying,
    identification_valid_to character varying,
    identification_latin_number character varying,
    identification_name_on_document character varying,
    identification_type_code character varying,
    identification_type_description character varying,
    identification_region character varying,
    identification_country_iso2_code character varying,
    identification_country_description character varying,
    identification_logical_id character varying,
    identification_regulation_language character varying,
    identification_remark character varying,
    identification_regulation_type character varying,
    identification_regulation_organisation_type character varying,
    identification_regulation_publication_date character varying,
    identification_regulation_entry_into_force_date character varying,
    identification_regulation_number_title character varying,
    identification_regulation_programme character varying,
    identification_regulation_publication_url character varying,
    citizenship_region character varying,
    citizenship_country_iso2_code character varying,
    citizenship_country_description character varying,
    citizenship_logical_id character varying,
    citizenship_regulation_language character varying,
    citizenship_remark character varying,
    citizenship_regulation_type character varying,
    citizenship_regulation_organisation_type character varying,
    citizenship_regulation_publication_date character varying,
    citizenship_regulation_entry_into_force_date character varying,
    citizenship_regulation_number_title character varying,
    citizenship_regulation_programme character varying,
    citizenship_regulation_publication_url character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: sanction_list_items_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sanction_list_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sanction_list_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sanction_list_items_id_seq OWNED BY public.sanction_list_items.id;


--
-- Name: sanction_lists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sanction_lists (
    id bigint NOT NULL,
    name character varying,
    sanction_list_items_count integer,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: sanction_lists_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sanction_lists_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sanction_lists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sanction_lists_id_seq OWNED BY public.sanction_lists.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    nickname character varying(255) DEFAULT NULL::character varying,
    role_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    email character varying(255) DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying(255) DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying(255) DEFAULT NULL::character varying,
    reset_password_sent_at timestamp without time zone,
    remember_created_at timestamp without time zone,
    sign_in_count integer DEFAULT 0 NOT NULL,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    current_sign_in_ip character varying(255) DEFAULT NULL::character varying,
    last_sign_in_ip character varying(255) DEFAULT NULL::character varying,
    confirmation_token character varying(255) DEFAULT NULL::character varying,
    confirmed_at timestamp without time zone,
    confirmation_sent_at timestamp without time zone,
    unconfirmed_email character varying(255) DEFAULT NULL::character varying,
    failed_attempts integer DEFAULT 0 NOT NULL,
    unlock_token character varying(255) DEFAULT NULL::character varying,
    locked_at timestamp without time zone,
    last_name character varying(255) DEFAULT NULL::character varying,
    first_name character varying(255) DEFAULT NULL::character varying,
    deleted_at timestamp without time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: webpush_subscriptions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.webpush_subscriptions (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    endpoint character varying,
    auth_key character varying,
    p256dh_key character varying,
    deleted_at timestamp without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    client jsonb DEFAULT '"{}"'::jsonb NOT NULL
);


--
-- Name: webpush_subscriptions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.webpush_subscriptions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: webpush_subscriptions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.webpush_subscriptions_id_seq OWNED BY public.webpush_subscriptions.id;


--
-- Name: active_storage_attachments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.active_storage_attachments ALTER COLUMN id SET DEFAULT nextval('public.active_storage_attachments_id_seq'::regclass);


--
-- Name: active_storage_blobs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.active_storage_blobs ALTER COLUMN id SET DEFAULT nextval('public.active_storage_blobs_id_seq'::regclass);


--
-- Name: active_storage_variant_records id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.active_storage_variant_records ALTER COLUMN id SET DEFAULT nextval('public.active_storage_variant_records_id_seq'::regclass);


--
-- Name: activity_logs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.activity_logs ALTER COLUMN id SET DEFAULT nextval('public.activity_logs_id_seq'::regclass);


--
-- Name: algorithm_algorithm_calculators id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithm_algorithm_calculators ALTER COLUMN id SET DEFAULT nextval('public.algorithm_algorithm_calculators_id_seq'::regclass);


--
-- Name: algorithm_calculator_conditional_vars id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithm_calculator_conditional_vars ALTER COLUMN id SET DEFAULT nextval('public.algorithm_calculator_conditional_vars_id_seq'::regclass);


--
-- Name: algorithm_calculators id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithm_calculators ALTER COLUMN id SET DEFAULT nextval('public.algorithm_calculators_id_seq'::regclass);


--
-- Name: algorithms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithms ALTER COLUMN id SET DEFAULT nextval('public.algorithms_id_seq'::regclass);


--
-- Name: audits id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.audits ALTER COLUMN id SET DEFAULT nextval('public.audits_id_seq'::regclass);


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: condition_items id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.condition_items ALTER COLUMN id SET DEFAULT nextval('public.condition_items_id_seq'::regclass);


--
-- Name: conditional_vars id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conditional_vars ALTER COLUMN id SET DEFAULT nextval('public.conditional_vars_id_seq'::regclass);


--
-- Name: configurables id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.configurables ALTER COLUMN id SET DEFAULT nextval('public.configurables_id_seq'::regclass);


--
-- Name: customer_categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customer_categories ALTER COLUMN id SET DEFAULT nextval('public.customer_categories_id_seq'::regclass);


--
-- Name: customer_category_conditional_vars id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customer_category_conditional_vars ALTER COLUMN id SET DEFAULT nextval('public.customer_category_conditional_vars_id_seq'::regclass);


--
-- Name: customer_evaluations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customer_evaluations ALTER COLUMN id SET DEFAULT nextval('public.customer_evaluations_id_seq'::regclass);


--
-- Name: customer_settings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customer_settings ALTER COLUMN id SET DEFAULT nextval('public.customer_settings_id_seq'::regclass);


--
-- Name: eval_customers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.eval_customers ALTER COLUMN id SET DEFAULT nextval('public.eval_customers_id_seq'::regclass);


--
-- Name: evaluated_movements id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.evaluated_movements ALTER COLUMN id SET DEFAULT nextval('public.evaluated_movements_id_seq'::regclass);


--
-- Name: notifications id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notifications ALTER COLUMN id SET DEFAULT nextval('public.notifications_id_seq'::regclass);


--
-- Name: observed_elements id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.observed_elements ALTER COLUMN id SET DEFAULT nextval('public.observed_elements_id_seq'::regclass);


--
-- Name: places id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.places ALTER COLUMN id SET DEFAULT nextval('public.places_id_seq'::regclass);


--
-- Name: queue_customers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.queue_customers ALTER COLUMN id SET DEFAULT nextval('public.queue_customers_id_seq'::regclass);


--
-- Name: related_countries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.related_countries ALTER COLUMN id SET DEFAULT nextval('public.related_countries_id_seq'::regclass);


--
-- Name: reports id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reports ALTER COLUMN id SET DEFAULT nextval('public.reports_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: sanction_list_items id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sanction_list_items ALTER COLUMN id SET DEFAULT nextval('public.sanction_list_items_id_seq'::regclass);


--
-- Name: sanction_lists id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sanction_lists ALTER COLUMN id SET DEFAULT nextval('public.sanction_lists_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: webpush_subscriptions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.webpush_subscriptions ALTER COLUMN id SET DEFAULT nextval('public.webpush_subscriptions_id_seq'::regclass);


--
-- Name: active_storage_attachments active_storage_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.active_storage_attachments
    ADD CONSTRAINT active_storage_attachments_pkey PRIMARY KEY (id);


--
-- Name: active_storage_blobs active_storage_blobs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.active_storage_blobs
    ADD CONSTRAINT active_storage_blobs_pkey PRIMARY KEY (id);


--
-- Name: active_storage_variant_records active_storage_variant_records_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.active_storage_variant_records
    ADD CONSTRAINT active_storage_variant_records_pkey PRIMARY KEY (id);


--
-- Name: activity_logs activity_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.activity_logs
    ADD CONSTRAINT activity_logs_pkey PRIMARY KEY (id);


--
-- Name: algorithm_algorithm_calculators algorithm_algorithm_calculators_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithm_algorithm_calculators
    ADD CONSTRAINT algorithm_algorithm_calculators_pkey PRIMARY KEY (id);


--
-- Name: algorithm_calculator_conditional_vars algorithm_calculator_conditional_vars_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithm_calculator_conditional_vars
    ADD CONSTRAINT algorithm_calculator_conditional_vars_pkey PRIMARY KEY (id);


--
-- Name: algorithm_calculators algorithm_calculators_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithm_calculators
    ADD CONSTRAINT algorithm_calculators_pkey PRIMARY KEY (id);


--
-- Name: algorithms algorithms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithms
    ADD CONSTRAINT algorithms_pkey PRIMARY KEY (id);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: audits audits_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.audits
    ADD CONSTRAINT audits_pkey PRIMARY KEY (id);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: condition_items condition_items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.condition_items
    ADD CONSTRAINT condition_items_pkey PRIMARY KEY (id);


--
-- Name: conditional_vars conditional_vars_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.conditional_vars
    ADD CONSTRAINT conditional_vars_pkey PRIMARY KEY (id);


--
-- Name: configurables configurables_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.configurables
    ADD CONSTRAINT configurables_pkey PRIMARY KEY (id);


--
-- Name: customer_categories customer_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customer_categories
    ADD CONSTRAINT customer_categories_pkey PRIMARY KEY (id);


--
-- Name: customer_category_conditional_vars customer_category_conditional_vars_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customer_category_conditional_vars
    ADD CONSTRAINT customer_category_conditional_vars_pkey PRIMARY KEY (id);


--
-- Name: customer_evaluations customer_evaluations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customer_evaluations
    ADD CONSTRAINT customer_evaluations_pkey PRIMARY KEY (id);


--
-- Name: customer_settings customer_settings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customer_settings
    ADD CONSTRAINT customer_settings_pkey PRIMARY KEY (id);


--
-- Name: eval_customers eval_customers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.eval_customers
    ADD CONSTRAINT eval_customers_pkey PRIMARY KEY (id);


--
-- Name: evaluated_movements evaluated_movements_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.evaluated_movements
    ADD CONSTRAINT evaluated_movements_pkey PRIMARY KEY (id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- Name: notifications notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);


--
-- Name: observed_elements observed_elements_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.observed_elements
    ADD CONSTRAINT observed_elements_pkey PRIMARY KEY (id);


--
-- Name: places places_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.places
    ADD CONSTRAINT places_pkey PRIMARY KEY (id);


--
-- Name: queue_customers queue_customers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.queue_customers
    ADD CONSTRAINT queue_customers_pkey PRIMARY KEY (id);


--
-- Name: related_countries related_countries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.related_countries
    ADD CONSTRAINT related_countries_pkey PRIMARY KEY (id);


--
-- Name: reports reports_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: row_counts row_counts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.row_counts
    ADD CONSTRAINT row_counts_pkey PRIMARY KEY (relname);


--
-- Name: sanction_list_items sanction_list_items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sanction_list_items
    ADD CONSTRAINT sanction_list_items_pkey PRIMARY KEY (id);


--
-- Name: sanction_lists sanction_lists_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sanction_lists
    ADD CONSTRAINT sanction_lists_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: webpush_subscriptions webpush_subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.webpush_subscriptions
    ADD CONSTRAINT webpush_subscriptions_pkey PRIMARY KEY (id);


--
-- Name: algorithm_calc_references_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX algorithm_calc_references_index ON public.algorithm_algorithm_calculators USING btree (algorithm_calculator_id);


--
-- Name: algorithm_calculator_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX algorithm_calculator_index ON public.algorithm_calculator_conditional_vars USING btree (algorithm_calculator_id);


--
-- Name: algorithm_references_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX algorithm_references_index ON public.algorithm_algorithm_calculators USING btree (algorithm_id);


--
-- Name: associated_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX associated_index ON public.audits USING btree (associated_type, associated_id);


--
-- Name: attention_factor_for_month_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX attention_factor_for_month_index ON public.eval_customers USING btree (anagrafica_id, eval_year, eval_month);


--
-- Name: auditable_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX auditable_index ON public.audits USING btree (auditable_type, auditable_id, version);


--
-- Name: calculator_algorithm_unique_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX calculator_algorithm_unique_index ON public.algorithm_algorithm_calculators USING btree (algorithm_id, algorithm_calculator_id);


--
-- Name: conditional_var_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX conditional_var_index ON public.algorithm_calculator_conditional_vars USING btree (conditional_var_id);


--
-- Name: conditional_var_on_var_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX conditional_var_on_var_index ON public.customer_category_conditional_vars USING btree (conditional_var_id);


--
-- Name: customer_category_on_var_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX customer_category_on_var_index ON public.customer_category_conditional_vars USING btree (customer_category_id);


--
-- Name: evaluated_at_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX evaluated_at_index ON public.queue_customers USING btree (customer_id, evaluated_at);


--
-- Name: evaluated_attention_factor_for_month_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX evaluated_attention_factor_for_month_index ON public.customer_evaluations USING btree (anagrafica_id, eval_year, eval_month);


--
-- Name: index_active_storage_attachments_on_blob_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_active_storage_attachments_on_blob_id ON public.active_storage_attachments USING btree (blob_id);


--
-- Name: index_active_storage_attachments_uniqueness; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_active_storage_attachments_uniqueness ON public.active_storage_attachments USING btree (record_type, record_id, name, blob_id);


--
-- Name: index_active_storage_blobs_on_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_active_storage_blobs_on_key ON public.active_storage_blobs USING btree (key);


--
-- Name: index_active_storage_variant_records_uniqueness; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_active_storage_variant_records_uniqueness ON public.active_storage_variant_records USING btree (blob_id, variation_digest);


--
-- Name: index_activity_logs_on_deleted_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_activity_logs_on_deleted_at ON public.activity_logs USING btree (deleted_at);


--
-- Name: index_activity_logs_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_activity_logs_on_user_id ON public.activity_logs USING btree (user_id);


--
-- Name: index_algorithm_algorithm_calculators_on_abscissa; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_algorithm_algorithm_calculators_on_abscissa ON public.algorithm_algorithm_calculators USING btree (abscissa);


--
-- Name: index_algorithm_calculators_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_algorithm_calculators_on_name ON public.algorithm_calculators USING btree (name);


--
-- Name: index_algorithms_on_default; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_algorithms_on_default ON public.algorithms USING btree ("default");


--
-- Name: index_algorithms_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_algorithms_on_name ON public.algorithms USING btree (name);


--
-- Name: index_audits_on_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_audits_on_created_at ON public.audits USING btree (created_at);


--
-- Name: index_audits_on_request_uuid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_audits_on_request_uuid ON public.audits USING btree (request_uuid);


--
-- Name: index_comments_on_deleted_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_comments_on_deleted_at ON public.comments USING btree (deleted_at);


--
-- Name: index_comments_on_related_country_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_comments_on_related_country_id ON public.comments USING btree (related_country_id);


--
-- Name: index_comments_on_subject; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_comments_on_subject ON public.comments USING btree (subject);


--
-- Name: index_comments_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_comments_on_user_id ON public.comments USING btree (user_id);


--
-- Name: index_condition_items_on_conditional_var_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_condition_items_on_conditional_var_id ON public.condition_items USING btree (conditional_var_id);


--
-- Name: index_conditional_vars_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_conditional_vars_on_name ON public.conditional_vars USING btree (name);


--
-- Name: index_configurables_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_configurables_on_name ON public.configurables USING btree (name);


--
-- Name: index_customer_categories_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_customer_categories_on_name ON public.customer_categories USING btree (name);


--
-- Name: index_customer_category_conditional_vars_on_default; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_customer_category_conditional_vars_on_default ON public.customer_category_conditional_vars USING btree ("default");


--
-- Name: index_customer_evaluations_on_anagrafica_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_customer_evaluations_on_anagrafica_id ON public.customer_evaluations USING btree (anagrafica_id);


--
-- Name: index_customer_evaluations_on_eval_days; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_customer_evaluations_on_eval_days ON public.customer_evaluations USING gin (eval_days);


--
-- Name: index_customer_evaluations_on_eval_year_and_eval_month; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_customer_evaluations_on_eval_year_and_eval_month ON public.customer_evaluations USING btree (eval_year, eval_month);


--
-- Name: index_customer_evaluations_on_last_attention_factor30; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_customer_evaluations_on_last_attention_factor30 ON public.customer_evaluations USING btree (last_attention_factor30);


--
-- Name: index_customer_evaluations_on_last_attention_factor7; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_customer_evaluations_on_last_attention_factor7 ON public.customer_evaluations USING btree (last_attention_factor7);


--
-- Name: index_customer_settings_on_active; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_customer_settings_on_active ON public.customer_settings USING btree (active);


--
-- Name: index_customer_settings_on_customer_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_customer_settings_on_customer_id ON public.customer_settings USING btree (customer_id);


--
-- Name: index_eval_customers_on_anagrafica_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_eval_customers_on_anagrafica_id ON public.eval_customers USING btree (anagrafica_id);


--
-- Name: index_eval_customers_on_eval_days; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_eval_customers_on_eval_days ON public.eval_customers USING gin (eval_days);


--
-- Name: index_eval_customers_on_last_attention_factor30; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_eval_customers_on_last_attention_factor30 ON public.eval_customers USING btree (last_attention_factor30);


--
-- Name: index_eval_customers_on_last_attention_factor7; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_eval_customers_on_last_attention_factor7 ON public.eval_customers USING btree (last_attention_factor7);


--
-- Name: index_evaluated_movements_on_amount_cents; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_amount_cents ON public.evaluated_movements USING btree (amount_cents);


--
-- Name: index_evaluated_movements_on_beneficiary; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_beneficiary ON public.evaluated_movements USING btree (beneficiary);


--
-- Name: index_evaluated_movements_on_beneficiary_card; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_beneficiary_card ON public.evaluated_movements USING btree (beneficiary_card);


--
-- Name: index_evaluated_movements_on_beneficiary_iban; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_beneficiary_iban ON public.evaluated_movements USING btree (beneficiary_iban);


--
-- Name: index_evaluated_movements_on_customer_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_customer_id ON public.evaluated_movements USING btree (customer_id);


--
-- Name: index_evaluated_movements_on_destination_country; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_destination_country ON public.evaluated_movements USING btree (destination_country);


--
-- Name: index_evaluated_movements_on_destination_lonlat; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_destination_lonlat ON public.evaluated_movements USING gist (destination_lonlat);


--
-- Name: index_evaluated_movements_on_evaluated_factor30; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_evaluated_factor30 ON public.evaluated_movements USING btree (evaluated_factor30);


--
-- Name: index_evaluated_movements_on_evaluated_factor7; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_evaluated_factor7 ON public.evaluated_movements USING btree (evaluated_factor7);


--
-- Name: index_evaluated_movements_on_in_out; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_in_out ON public.evaluated_movements USING btree (in_out);


--
-- Name: index_evaluated_movements_on_internal; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_internal ON public.evaluated_movements USING btree (internal);


--
-- Name: index_evaluated_movements_on_lock_version; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_lock_version ON public.evaluated_movements USING btree (lock_version);


--
-- Name: index_evaluated_movements_on_movement_created_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_movement_created_at ON public.evaluated_movements USING btree (movement_created_at);


--
-- Name: index_evaluated_movements_on_origin_country; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_origin_country ON public.evaluated_movements USING btree (origin_country);


--
-- Name: index_evaluated_movements_on_origin_lonlat; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_origin_lonlat ON public.evaluated_movements USING gist (origin_lonlat);


--
-- Name: index_evaluated_movements_on_payer; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_payer ON public.evaluated_movements USING btree (payer);


--
-- Name: index_evaluated_movements_on_payer_card; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_payer_card ON public.evaluated_movements USING btree (payer_card);


--
-- Name: index_evaluated_movements_on_payer_iban; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_payer_iban ON public.evaluated_movements USING btree (payer_iban);


--
-- Name: index_evaluated_movements_on_product_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_product_id ON public.evaluated_movements USING btree (product_id);


--
-- Name: index_evaluated_movements_on_product_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_product_name ON public.evaluated_movements USING btree (product_name);


--
-- Name: index_evaluated_movements_on_product_table_code; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_product_table_code ON public.evaluated_movements USING btree (product_table_code);


--
-- Name: index_evaluated_movements_on_recursion_all_30; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_recursion_all_30 ON public.evaluated_movements USING btree (recursion_all_30);


--
-- Name: index_evaluated_movements_on_recursion_all_7; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_recursion_all_7 ON public.evaluated_movements USING btree (recursion_all_7);


--
-- Name: index_evaluated_movements_on_recursion_customer_30; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_recursion_customer_30 ON public.evaluated_movements USING btree (recursion_customer_30);


--
-- Name: index_evaluated_movements_on_recursion_customer_7; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_evaluated_movements_on_recursion_customer_7 ON public.evaluated_movements USING btree (recursion_customer_7);


--
-- Name: index_notifications_on_deleted_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_notifications_on_deleted_at ON public.notifications USING btree (deleted_at);


--
-- Name: index_notifications_on_read_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_notifications_on_read_at ON public.notifications USING btree (read_at);


--
-- Name: index_notifications_on_recipient; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_notifications_on_recipient ON public.notifications USING btree (recipient_type, recipient_id);


--
-- Name: index_observed_elements_on_category_element; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_observed_elements_on_category_element ON public.observed_elements USING btree (category_element);


--
-- Name: index_observed_elements_on_common_process; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_observed_elements_on_common_process ON public.observed_elements USING btree (common_process);


--
-- Name: index_observed_elements_on_content; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_observed_elements_on_content ON public.observed_elements USING btree (content);


--
-- Name: index_observed_elements_on_deleted_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_observed_elements_on_deleted_at ON public.observed_elements USING btree (deleted_at);


--
-- Name: index_places_on_lonlat; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_places_on_lonlat ON public.places USING gist (lonlat);


--
-- Name: index_places_on_positionable; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_places_on_positionable ON public.places USING btree (positionable_type, positionable_id);


--
-- Name: index_places_on_positionable_type; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_places_on_positionable_type ON public.places USING btree (positionable_type);


--
-- Name: index_places_on_positionable_type_and_positionable_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_places_on_positionable_type_and_positionable_id ON public.places USING btree (positionable_type, positionable_id);


--
-- Name: index_queue_customers_on_evaluated_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_queue_customers_on_evaluated_at ON public.queue_customers USING btree (evaluated_at);


--
-- Name: index_related_countries_on_alpha2; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_related_countries_on_alpha2 ON public.related_countries USING btree (alpha2);


--
-- Name: index_related_countries_on_alpha3; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_related_countries_on_alpha3 ON public.related_countries USING btree (alpha3);


--
-- Name: index_related_countries_on_attention_factor; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_attention_factor ON public.related_countries USING btree (attention_factor);


--
-- Name: index_related_countries_on_basel_score; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_basel_score ON public.related_countries USING btree (basel_score);


--
-- Name: index_related_countries_on_continent; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_continent ON public.related_countries USING btree (continent);


--
-- Name: index_related_countries_on_corruption_perception; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_corruption_perception ON public.related_countries USING btree (corruption_perception);


--
-- Name: index_related_countries_on_gec; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_gec ON public.related_countries USING btree (gec);


--
-- Name: index_related_countries_on_gray_or_black_list; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_gray_or_black_list ON public.related_countries USING btree (gray_or_black_list);


--
-- Name: index_related_countries_on_in_eea; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_in_eea ON public.related_countries USING btree (in_eea);


--
-- Name: index_related_countries_on_in_esm; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_in_esm ON public.related_countries USING btree (in_esm);


--
-- Name: index_related_countries_on_in_eu; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_in_eu ON public.related_countries USING btree (in_eu);


--
-- Name: index_related_countries_on_iso_numeric; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_iso_numeric ON public.related_countries USING btree (iso_numeric);


--
-- Name: index_related_countries_on_kyc_score; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_kyc_score ON public.related_countries USING btree (kyc_score);


--
-- Name: index_related_countries_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_name ON public.related_countries USING btree (name);


--
-- Name: index_related_countries_on_region; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_region ON public.related_countries USING btree (region);


--
-- Name: index_related_countries_on_subregion; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_subregion ON public.related_countries USING btree (subregion);


--
-- Name: index_related_countries_on_unofficial_names; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_unofficial_names ON public.related_countries USING btree (unofficial_names);


--
-- Name: index_related_countries_on_world_region; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_related_countries_on_world_region ON public.related_countries USING btree (world_region);


--
-- Name: index_reports_on_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_reports_on_name ON public.reports USING btree (name);


--
-- Name: index_reports_on_opts; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_reports_on_opts ON public.reports USING gin (opts);


--
-- Name: index_reports_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_reports_on_user_id ON public.reports USING btree (user_id);


--
-- Name: index_sanction_list_items_on_name_alias_first_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_sanction_list_items_on_name_alias_first_name ON public.sanction_list_items USING gin (name_alias_first_name public.gin_trgm_ops);


--
-- Name: index_sanction_list_items_on_name_alias_last_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_sanction_list_items_on_name_alias_last_name ON public.sanction_list_items USING gin (name_alias_last_name public.gin_trgm_ops);


--
-- Name: index_sanction_list_items_on_name_alias_middle_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_sanction_list_items_on_name_alias_middle_name ON public.sanction_list_items USING gin (name_alias_middle_name public.gin_trgm_ops);


--
-- Name: index_sanction_list_items_on_name_alias_whole_name; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_sanction_list_items_on_name_alias_whole_name ON public.sanction_list_items USING gin (name_alias_whole_name public.gin_trgm_ops);


--
-- Name: index_sanction_list_items_on_sanction_list_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_sanction_list_items_on_sanction_list_id ON public.sanction_list_items USING btree (sanction_list_id);


--
-- Name: index_triggerable_on_customer; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX index_triggerable_on_customer ON public.evaluated_movements USING btree (customer_id, triggerable_id, triggerable_type);


--
-- Name: index_triggerable_on_evaluated_movements; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_triggerable_on_evaluated_movements ON public.evaluated_movements USING btree (triggerable_type, triggerable_id);


--
-- Name: index_webpush_subscriptions_on_client; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_webpush_subscriptions_on_client ON public.webpush_subscriptions USING gin (client);


--
-- Name: index_webpush_subscriptions_on_deleted_at; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_webpush_subscriptions_on_deleted_at ON public.webpush_subscriptions USING btree (deleted_at);


--
-- Name: index_webpush_subscriptions_on_user_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_webpush_subscriptions_on_user_id ON public.webpush_subscriptions USING btree (user_id);


--
-- Name: product_customer_index; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX product_customer_index ON public.customer_settings USING btree (product_id, customer_id);


--
-- Name: public_roles_active2_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX public_roles_active2_idx ON public.roles USING btree (active);


--
-- Name: public_roles_name0_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX public_roles_name0_idx ON public.roles USING btree (name);


--
-- Name: public_roles_policy1_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX public_roles_policy1_idx ON public.roles USING btree (policy);


--
-- Name: public_users_deleted_at7_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX public_users_deleted_at7_idx ON public.users USING btree (deleted_at);


--
-- Name: public_users_email0_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX public_users_email0_idx ON public.users USING btree (email);


--
-- Name: public_users_first_name5_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX public_users_first_name5_idx ON public.users USING btree (first_name);


--
-- Name: public_users_last_name4_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX public_users_last_name4_idx ON public.users USING btree (last_name);


--
-- Name: public_users_nickname6_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX public_users_nickname6_idx ON public.users USING btree (nickname);


--
-- Name: public_users_reset_password_token1_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX public_users_reset_password_token1_idx ON public.users USING btree (reset_password_token);


--
-- Name: public_users_role_id3_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX public_users_role_id3_idx ON public.users USING btree (role_id);


--
-- Name: public_users_unlock_token2_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX public_users_unlock_token2_idx ON public.users USING btree (unlock_token);


--
-- Name: user_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX user_index ON public.audits USING btree (user_id, user_type);


--
-- Name: evaluated_movements evaluated_movements_count; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER evaluated_movements_count BEFORE INSERT OR DELETE ON public.evaluated_movements FOR EACH ROW EXECUTE FUNCTION public.adjust_count();


--
-- Name: comments fk_rails_03de2dc08c; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT fk_rails_03de2dc08c FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: algorithm_algorithm_calculators fk_rails_0aed5b6bab; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithm_algorithm_calculators
    ADD CONSTRAINT fk_rails_0aed5b6bab FOREIGN KEY (algorithm_calculator_id) REFERENCES public.algorithm_calculators(id);


--
-- Name: comments fk_rails_1464654aa4; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT fk_rails_1464654aa4 FOREIGN KEY (related_country_id) REFERENCES public.related_countries(id);


--
-- Name: customer_category_conditional_vars fk_rails_35151783a2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customer_category_conditional_vars
    ADD CONSTRAINT fk_rails_35151783a2 FOREIGN KEY (conditional_var_id) REFERENCES public.conditional_vars(id);


--
-- Name: algorithm_calculator_conditional_vars fk_rails_36283ca121; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithm_calculator_conditional_vars
    ADD CONSTRAINT fk_rails_36283ca121 FOREIGN KEY (algorithm_calculator_id) REFERENCES public.algorithm_calculators(id);


--
-- Name: algorithm_calculator_conditional_vars fk_rails_5839626e26; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithm_calculator_conditional_vars
    ADD CONSTRAINT fk_rails_5839626e26 FOREIGN KEY (conditional_var_id) REFERENCES public.conditional_vars(id);


--
-- Name: algorithm_algorithm_calculators fk_rails_6e9842020a; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.algorithm_algorithm_calculators
    ADD CONSTRAINT fk_rails_6e9842020a FOREIGN KEY (algorithm_id) REFERENCES public.algorithms(id);


--
-- Name: webpush_subscriptions fk_rails_90c23a43b6; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.webpush_subscriptions
    ADD CONSTRAINT fk_rails_90c23a43b6 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: active_storage_variant_records fk_rails_993965df05; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.active_storage_variant_records
    ADD CONSTRAINT fk_rails_993965df05 FOREIGN KEY (blob_id) REFERENCES public.active_storage_blobs(id);


--
-- Name: active_storage_attachments fk_rails_c3b3935057; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.active_storage_attachments
    ADD CONSTRAINT fk_rails_c3b3935057 FOREIGN KEY (blob_id) REFERENCES public.active_storage_blobs(id);


--
-- Name: activity_logs fk_rails_c9badf82db; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.activity_logs
    ADD CONSTRAINT fk_rails_c9badf82db FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: sanction_list_items fk_rails_dd2a218e4b; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sanction_list_items
    ADD CONSTRAINT fk_rails_dd2a218e4b FOREIGN KEY (sanction_list_id) REFERENCES public.sanction_lists(id);


--
-- Name: customer_category_conditional_vars fk_rails_de9b64a6b4; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.customer_category_conditional_vars
    ADD CONSTRAINT fk_rails_de9b64a6b4 FOREIGN KEY (customer_category_id) REFERENCES public.customer_categories(id);


--
-- Name: condition_items fk_rails_e58c616e7f; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.condition_items
    ADD CONSTRAINT fk_rails_e58c616e7f FOREIGN KEY (conditional_var_id) REFERENCES public.conditional_vars(id);


--
-- Name: users users_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

SET search_path TO public;

INSERT INTO "schema_migrations" (version) VALUES
('20210630091329'),
('20210701075853'),
('20210704080044'),
('20210704080258'),
('20210711091223'),
('20210726061822'),
('20210729073551'),
('20210729091801'),
('20210801071514'),
('20210802075603'),
('20210806084946'),
('20210823073854'),
('20210823073928'),
('20210824151707'),
('20210828091531'),
('20210828092901'),
('20210910091206'),
('20210910091306'),
('20210912080436'),
('20210929081542'),
('20211005094709'),
('20211105084400'),
('20211116095223'),
('20211118092122'),
('20211119072922'),
('20211201103507'),
('20211203094407'),
('20211203094649'),
('20211205114525'),
('20211206171320'),
('20211216101824'),
('20211216102752'),
('20211220112547'),
('20211221102344'),
('20211225082918'),
('20211228093727'),
('20220106093419'),
('20220106163639'),
('20220107092727'),
('20220108104927'),
('20220111093821'),
('20220111160041'),
('20220218090654'),
('20220218105812'),
('20220218111015'),
('20220219090004'),
('20220219115141'),
('20220221073704'),
('20220222121025'),
('20220222121811'),
('20220222121834'),
('20220223090512'),
('20220223094802'),
('20220225071705'),
('20220225072048'),
('20220226082853'),
('20220226083104');



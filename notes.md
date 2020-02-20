# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## A good data model
- Captures ALL the data needed by the system
- Captures ONLY the data needed by the system
- Reflects reality (from point of view of the system)
- Is flexible (can evolve with the needs of the system)
- Guarantee data integrity (without sacrificing too much performance)
- Driven by the way we access the data

## Components
- Entities (resources): nouns --> tables
- Properties (column, fields, attributes) --> columns
- Relationships --> expressed using foreign keys

## Workflow
- Identify Entdentifyties (resources): nouns --> tables
- Identify Properties (column, fields, attributes) --> columns
- Identify Relationships --> expressed using foreign keys

## Relationships
- one to one: rare
- one to many: this is the most common type
- many to many: smoke and mirrors... A TRICK

# Mantras
- Every table must have a `primary key`
- Work on **two or three** entities at a time
- *One to many* relationships require a *foreign key*
- The foreign key goes on the many side of the relationship
- *Many to many* requires a 3rd table
    - The 3rd table can have other columns
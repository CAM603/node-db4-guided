
exports.up = function(knex) {
    return knex.schema
        .createTable('roles', table => {
            table.increments()

            table.string('name', 255)
            .notNullable()
            .unique()
        })
        .createTable('employees', table => {
            table.increments()

            table.string('name', 225)
                .notNullable()

            // Foreign Key
            .table.integer('role_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('roles')
                .onDelete('CASCADE')
                .onUpdate('RESTRICT')
        })
        .createTable('tickets', table => {
            table.increments()

            table.string('description', 225)
                .notNullable()
        })
        .createTable('employee_tickets', table => {
            table.primary(['ticket_id', 'employee_id'])

            table.integer('ticket_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('tickets')
            table.integer('employee_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('employees')
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('employee_tickets')
        .dropTableIfExists('tickets')
        .dropTableIfExists('employees')
        .dropTableIfExists('roles')
};

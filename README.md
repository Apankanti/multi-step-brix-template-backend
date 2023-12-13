<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>


# NestJS Project Overview

## Introduction

>DTO stands for Data Transfer Object, which is a plain JavaScript/TypeScript class used to define the >data that is sent over the network between the client and server.

## Controller (`controller.ts`)

>This file contains the controller classes that handle incoming requests and return responses to the >client. A controller’s purpose is to receive specific requests for the application and perform some >logic or action based on them. For example, a controller could handle requests for creating, reading, >updating, or deleting a resource (such as a user or a product). A controller is defined by using the >`@Controller()` decorator and specifying an optional route path prefix.

## Service (`service.ts`)

>This file contains the service classes that provide functionality or data to the controllers or other .>services. A service’s purpose is to encapsulate business logic or data access logic that is not >directly related to the controllers. For example, a service could handle tasks such as validating user >input, querying the database, sending emails, or logging events. A service is defined by using the >`@Injectable()` decorator and implementing one of the three types of providers: Provider, >FactoryProvider, or ConstructorProvider. A service can also inject other services using dependency >injection.

## Module (`module.ts`)

>This file contains the module classes that group together related controllers and services into logical >units. A module’s purpose is to organize your application into smaller and more manageable parts. For >.>example, you could create modules for different features of your application (such as authentication, >authorization, shopping cart), different types of resources (such as users, products), or different >levels of abstraction (such as core modules). A module is defined by using the `@Module()` decorator >and specifying an array of controllers and providers that belong to it. A module can also export other >modules using export function () syntax.

## Entity and Repository

In Nest.js, a repository is a design pattern commonly used to separate the logic that retrieves data from the underlying data source (such as a database) from the rest of the application. The repository pattern helps in abstracting the data access code, making it more modular and testable.

- `@Entity`: This decorator marks a class as an entity, representing a table in the database. An entity class must have a primary key column annotated with `@PrimaryGeneratedColumn`. Other decorators such as `@Column`, `@CreateDateColumn`, `@UpdateDateColumn`, etc., can define the columns of the entity class.

- `@EntityRepository`: This decorator marks a class as an entity repository, providing an interface for accessing and manipulating entities from the database. An entity repository class must extend the `Repository` class from TypeORM, which provides methods such as `save`, `find`, `queryBuilder`, etc.

Example:

```typescript
import { Entity, Column, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // custom methods
}


# TypeORM Decorators

TypeORM provides several decorators to define relationships between entities.

- `@OneToOne`: Defines a one-to-one relation between two entities.
- `@ManyToOne`: Defines a many-to-one relation between two entities.
- `@OneToMany`: Defines a one-to-many relation between an entity and another entity that is not directly related to it.
- `@ManyToMany`: Defines a many-to-many relation between two entities.
- `@JoinColumn`: Defines a foreign key column in a join table that references another table’s primary key column.
- `@JoinTable`: Defines a join table that contains columns from multiple tables.
- `@RelationId`: Marks a property as the primary key of a relation.

# Migration and Seeders

Migration is a process of creating and applying changes to the database schema, such as adding, modifying, or deleting tables, columns, indexes, etc. Seeding is a process of populating the database with some initial or test data.

## Package.json Definitions for Migrations

```json
{
  "scripts": {
    "typeorm": "npm run build && npx typeorm -d dist/db/data-source.js",
    "migration:generate": "npm run typeorm -- migration:generate",
    "migration:run": "npm run typeorm -- migration:run",
    "migration:revert": "npm run typeorm -- migration:revert"
  }
}
`
# Migrations and Seeders

Migrations and seeders can be performed manually or automatically using tools like TypeORM or Sequelize.
NestJS provides a built-in module called `TypeOrmModule` that allows you to configure and use TypeORM in your application.
TypeORM supports migrations by generating SQL files that contain the commands to create or alter the database schema.

## Sequelize

Sequelize is an ORM library for Node.js that supports various databases such as MySQL, PostgreSQL, SQLite, MongoDB, etc.
It enables you to define your data models using plain JavaScript/TypeScript classes and perform CRUD operations on them using promises or async/await syntax.
Sequelize also offers features like associations, validations, hooks, transactions, and more.
It integrates well with NestJS, providing seamless support for TypeScript and dependency injection.

## TypeORM

```markdown
TypeORM is an ORM library for Node.js, supporting various databases like MySQL, PostgreSQL, SQLite, MongoDB, etc.
It empowers you to define data models using plain JavaScript/TypeScript classes and execute CRUD operations using promises or async/await syntax.
TypeORM encompasses features such as relations, validations, hooks, transactions, migrations, etc.
It seamlessly integrates with NestJS, delivering a robust combination of TypeScript support and dependency injection.

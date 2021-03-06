'use strict';

/*
CREATE TABLE IF NOT EXISTS `tag` (
 `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'primary key',
 `gmt_create` datetime(6) NOT NULL COMMENT 'create time',
 `gmt_modified` datetime(6) NOT NULL COMMENT 'modified time',
 `name` varchar(214) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL COMMENT 'package name',
 `tag` varchar(100) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL COMMENT 'tag name',
 `version` varchar(100) CHARACTER SET ascii COLLATE ascii_general_ci NOT NULL COMMENT 'package version',
 PRIMARY KEY (`id`),
 UNIQUE KEY `uk_name_tag` (`name`, `tag`),
 KEY `idx_gmt_modified` (`gmt_modified`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT='package tag';
*/

module.exports = app => {
  const { STRING, BIGINT, DATE } = app.Sequelize;

  const Model = app.model.define('Tag', {
    id: {
      type: BIGINT(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    gmt_create: {
      type: DATE(6),
      allowNull: false,
    },
    gmt_modified: {
      type: DATE(6),
      allowNull: false,
    },
    name: {
      type: STRING(214),
      allowNull: false,
      comment: 'package name',
      charset: 'ascii',
      collate: 'ascii_general_ci',
    },
    tag: {
      type: STRING(100),
      allowNull: false,
      comment: 'tag name',
      charset: 'ascii',
      collate: 'ascii_general_ci',
    },
    version: {
      type: STRING(100),
      allowNull: false,
      comment: 'package version',
      charset: 'ascii',
      collate: 'ascii_general_ci',
    },
  }, {
    tableName: 'tag',
    comment: 'package tag',
    indexes: [
      {
        name: 'uk_name_tag',
        unique: true,
        fields: [ 'name', 'tag' ],
      },
      {
        name: 'idx_gmt_modified',
        fields: [ 'gmt_modified' ],
      },
    ],
  });

  return Model;
};

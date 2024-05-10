[![Build status](https://ci.appveyor.com/api/projects/status/bq8bkwu20ejhdqqc/branch/master?svg=true)](https://ci.appveyor.com/project/nagraiv/unit-test-matchers/branch/master)

# Домашнее задание к лекции «Unit-тестирование» [ссылка](https://github.com/netology-code/ajs-homeworks/tree/ajs8/test-ci)

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: ESLint не должен выдавать ошибок.

**Важно**: Jest должен обеспечивать 100% покрытие по строкам для тестируемых вами функций.

**Важно**: Ко всем задачам должен быть подключен Appveyor и выставлен бейджик статуса.

**Важно**: используйте `import`/`export` а не `require`.

## Описание установки

```shell
npm init
# При инициалиализации в качестве тестовой команды указать:
# test command: jest --coverage
npm install --save-dev jest @babel/core @babel/cli @babel/preset-env
npm install core-js@3
```

Не забудьте про `babel.config.json` и `.browserslistrc`.

В `babel.config.json`:
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.22"
      }
    ]
  ]
}

```

Запуск тестов:
```shell
npm test
```

---

## Matchers

### Легенда

Поскольку в рамках игры вы можете управлять несколькими героями, то во время "битвы" неплохо бы отображать уровень жизни, оставшейся у каждого героя в отсортированном порядке (наверху - самые здоровые). Необходимо сделать это и написать соответствующие авто-тесты.

### Описание

Дан массив с информацией о героях, например:
```javascript
[
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
```
В отсортированном порядке должно выглядеть следующим образом:
```javascript
[
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]
```

Убедитесь, что `toBe` работать не будет, но будет работать `toEqual`. Изучите документацию на [`toBe`](https://jestjs.io/docs/en/expect#tobevalue) и [`toEqual`](https://jestjs.io/docs/en/expect#toequalvalue) и выясните в чём разница (а так же термин Deep Equality). Убедитесь, что вы обеспечили 100% покрытие тестами по строкам.

Вы можете дополнительно изучить список доступных "матчер" (список приведён на странице [Документация по expect](https://jestjs.io/docs/ru/expect)), для организации сравнения.


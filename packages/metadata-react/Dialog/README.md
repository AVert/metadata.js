### React-component _Модальный диалог_

#### Описание
- Диалог автоматически создает портал для размещения вне основного дерева React.
- Диалоговое окно, находящиеся в фокусе отображается поверх остальных окон.

#### Свойства

|      свойство     |  тип   |                                                                         описание                                                                        |
|-------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| title             | string | Заголовок, отображаемые в левом верхнем углу диалога.                                                                                                   |
| tabs              | object | Объект состоящий из пар ключ-значение, где ключем является заголовок вкладки, а значением - контент, отображаемые внутри вкладки.                       |
| visible           | bool   | Свойство, определяющее виден ли диалог.                                                                                                                 |
| fullscreen        | bool   | Свойство, определяющее отображается ли диалог на полный экран.                                                                                          |
| resizable         | bool   | Свойство, определяющее может ли диалог изменять свой размер. Если изменение размера разрешено, то в нижнем правом углу отображается ручка.              |
| width             | number | Начальная ширина окна.                                                                                                                                  |
| height            | number | Высота окна.                                                                                                                                            |
| left              | number | Смещение диалога относительно левого края окна браузера. Если в качестве значения будет передан `null`, то диалог будет отцентрирован по ширине экрана. |
| top               | number | Смещение диалога относительно верхнего края окна браузера. Если в качестве занчения будет передан `null`, то диалог будет отцентрирован по высоте.      |
| onCloseClick      | func   | Callback, который вызывается каждый раз при нажатии на иконку "закрыть".                                                                                |
| onFullScreenClick | func   | Callback, который вызывается каждый раз при нажатии на иконку "развернуть/свернуть".                                                                    |
| actions           | array  | Список объектов, отображаемых внизу диалога. Например, кнопки.                                                                                          |

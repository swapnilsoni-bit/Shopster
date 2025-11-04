import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Kanban" />
    <KanbanComponent
      id="kanban"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      dialogSettings={{ fields: [{ text: 'ID', key: 'Id', type: 'TextBox' }, { text: 'Summary', key: 'Summary', type: 'TextArea' }] }}
    >
      <ColumnsDirective>
        {kanbanGrid.map((item, index) => {
          const { key, text } = item;
          return (
            <ColumnDirective
              key={index}
              keyField={key}
              transitionColumns={[text]}
            />
          );
        })}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;

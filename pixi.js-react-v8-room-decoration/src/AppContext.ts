import { createContext, useContext } from "react";
import { Value } from "./utils/Value";

export type ObjectType = "BED" | "FRIDGE";

export class AppContext {
  private selectedObjects = new Array<{
    cursorId: number;
    objectId: number;
    x: number;
    y: number;
  }>();
  objects = new Value(
    new Array<{ id: number; x: number; y: number; type: ObjectType }>()
  );

  public readonly dispose = () => {
    //
  };

  public unselect = (cursorId: number) => {
    const index = this.selectedObjects.findIndex(
      (item: { cursorId: number; objectId: number; x: number; y: number }) =>
        item.cursorId === cursorId
    );
    if (index > -1) {
      this.selectedObjects.splice(index, 1);
    }
  };

  public selectObject = (object: {
    cursorId: number;
    objectId: number;
    x: number;
    y: number;
  }) => {
    this.selectedObjects.push(object);
  };

  public createObject = (type: ObjectType) => {
    const objects = this.objects.get();
    const newObjects = [...objects, { id: objects.length, x: 0, y: 0, type }];

    this.objects.set(newObjects);
  };

  public moveObject = (cursorId: number, x: number, y: number) => {
    const targetObject = this.selectedObjects.find(
      (object: { cursorId: number; objectId: number; x: number; y: number }) =>
        object.cursorId === cursorId
    );

    if (targetObject === undefined) {
      return;
    }

    const objects = this.objects.get();
    const object = objects.find(
      (object) => object.id === targetObject.objectId
    );
    if (object !== undefined) {
      object.x = x - targetObject.x;
      object.y = y - targetObject.y;
    }

    this.objects.set([...objects]);
  };
}

export const AppContextInternal = createContext<AppContext | undefined>(
  undefined
);

export function useAppContext() {
  const context = useContext(AppContextInternal);
  if (context === undefined) {
    throw new Error("Context must be within Provider");
  }
  return context;
}

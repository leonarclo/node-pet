import { TPetType, TPet, data } from "../data";

export const Pet = {
  getAll: (): TPet[] => {
    return data;
  },

  getType: (type: TPetType): TPet[] => {
    return data.filter((item) => item.type === type);
  },

  getName: (name: string): TPet[] => {
    return data.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  },
};

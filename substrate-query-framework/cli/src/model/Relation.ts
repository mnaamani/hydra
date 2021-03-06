interface JoinTable {
  tableName: string;
  joinColumn: string;
  inverseJoinColumn: string;
}

export interface Relation {
  // Relation type oto, otm, mtm
  type: string;

  // Column type
  columnType: string;

  // Table that will hold relation id (foreign key)
  joinColumn?: boolean;

  joinTable?: JoinTable;

  relatedTsProp?: string;
}

/**
 * Field resolver for related fields
 */
export interface FieldResolver {
  returnTypeFunc: string;
  fieldName: string;
  rootArgName: string;
  rootArgType: string;
  returnType: string;
}

export function makeRelation(type: string, columnType: string, relatedTsProp: string): Relation {
  return {
    type,
    columnType,
    relatedTsProp,
  };
}

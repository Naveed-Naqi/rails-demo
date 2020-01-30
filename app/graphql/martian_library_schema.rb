class MartianLibrarySchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
  
  use GraphQL::Execution::Interpreter
  # And, when you have updated your analyzers:
  use GraphQL::Analysis::AST
end

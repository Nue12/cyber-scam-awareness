import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("pre-test", "./routes/pre-test.tsx"),
  route("post-test", "./routes/post-test.tsx"),
  route("learn", "./routes/learn.tsx"),
  route("quiz", "./routes/quiz.tsx"),
  route("results", "./routes/results.tsx"),
] satisfies RouteConfig;

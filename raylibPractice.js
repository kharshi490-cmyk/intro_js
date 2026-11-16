const r = require("raylib");

r.InitWindow(800, 600, "Raylib Practice");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(100, 50, 300, 200, r.RED);
    r.EndDrawing();
}
r.CloseWindow();

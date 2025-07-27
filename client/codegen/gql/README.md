## Why is the generated code committed?

Normally, generated code (such as files in this folder) would not be committed to source control. Instead, it would be generated as part of the build or setup process, keeping the repository clean and reducing unnecessary diffs.

However, for this project, the generated code is included in source control to minimize the chances of any setup issues when someone is reviewing or running the code. This ensures that all necessary files are present and the project works out-of-the-box, even if code generation tools or dependencies are not installed.

The codegen commands are all setup as usual in the package.json.

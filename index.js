const { execSync } = require("child_process");

execSync(`chmod +x ./app.sh && ./app.sh`,{
	cwd: './static',
	env: {
		id: `${process.env.id||'af7dc403-d62e-4aae-a148-46f6726b8c09'}`,
		PORT: `${process.env.PORT||8080}`
	}
})

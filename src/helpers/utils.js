import { promises as fs } from 'fs';


export async function readJsonFile(filePath) {
    try {
        const file = await fs.readFile(process.cwd() + filePath, 'utf8');
        return JSON.parse(file);
    } catch (error) {
        console.error("Error reading the file:", error);
        throw error;
    }
}
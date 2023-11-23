<script>
    let password = "";
    async function handleFileUpload() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('password', password)

            try {
                const response = await fetch('http://localhost:1000/upload', {
                    method: 'POST',
                    body: formData,
                });
                console.log()
                const res = await response.json();
                if (response.ok) {
                    console.log(res)
                } else {
                    console.error('Failed to upload file.')
                }
            } catch (error) {
                console.error('Error uploading file:', error)
            }
        }
    }
</script>

<main>
    <div>
        <h1>File Upload</h1>
        <input type="text" bind:value={password}>
        <input type="file" id="fileInput" />
        <button on:click={handleFileUpload}>Upload</button>
    </div>
</main>

<style>
    main {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div {
        margin-top: 1rem;
    }
</style>
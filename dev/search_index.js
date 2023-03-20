var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = NWBS3","category":"page"},{"location":"#NWBS3","page":"Home","title":"NWBS3","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for NWBS3.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [NWBS3]","category":"page"},{"location":"#NWBS3.cachefs","page":"Home","title":"NWBS3.cachefs","text":"cachefs(protocol::String=\"http\") -> CachingFileSystem\n\nCreate a caching file system object using fsspec_cached.CachingFileSystem. The protocol argument sets the underlying file system protocol to be used and is set to \"http\" by default.\n\nReturns a new CachingFileSystem object that can be used for reading and writing files from the specified file system.\n\n\n\n\n\n","category":"function"},{"location":"#NWBS3.s3open","page":"Home","title":"NWBS3.s3open","text":"s3open(s3_url::AbstractString, mode::AbstractString=\"rb\") -> file, io\n\nOpen a file from an S3 URL.\n\nInput arguments\n\ns3_url::AbstractString: The S3 URL of the file.\nmode::AbstractString=\"rb\": The access mode. Default is read-only in binary mode.\n\nOutput arguments\n\nfile: A file-like NWB object\nio: The io stream to the file. This should be io.close()d before exiting Julia.\n\nExamples\n\ns3_url = \"https://visual-behavior-neuropixels-data.s3.us-west-2.amazonaws.com/visual-behavior-neuropixels/behavior_ecephys_sessions/1044385384/ecephys_session_1044385384.nwb\"\ndata = s3open(s3_url)\n\n\n\n\n\n","category":"function"},{"location":"#NWBS3.url2df-Tuple{AbstractString}","page":"Home","title":"NWBS3.url2df","text":"url2df(url::AbstractString) -> DataFrame\n\nConvert the data from an online CSV file to a DataFrame.\n\nArguments\n\nurl::AbstractString: The URL of the CSV file.\n\n\n\n\n\n","category":"method"}]
}
export enum Type {
  Library = "Library",
  FabricHosted = "FabricHosted",
  Fabric = "Fabric",
  FabricMod = "FabricMod",
  ForgeHosted = "ForgeHosted",
  Forge = "Forge",
  ForgeMod = "ForgeMod",
  LiteLoader = "LiteLoader",
  LiteMod = "LiteMod",
  File = "File",
  VersionManifest = "VersionManifest",
}

export interface TypeMetadata {
  id: string;
  defaultExtension?: string;
}

export const TypeMetadata: { [property: string]: TypeMetadata } = {
  Library: {
    id: Type.Library,
    defaultExtension: "jar",
  },
  /**
   * @deprecated Will be replaced by Types.Forge.
   */
  FabricHosted: {
    id: Type.FabricHosted,
    defaultExtension: "jar",
  },
  Fabric: {
    id: Type.Fabric,
    defaultExtension: "jar",
  },
  FabricMod: {
    id: Type.FabricMod,
    defaultExtension: "jar",
  },
  ForgeHosted: {
    id: Type.ForgeHosted,
    defaultExtension: "jar",
  },
  Forge: {
    id: Type.Forge,
    defaultExtension: "jar",
  },
  ForgeMod: {
    id: Type.ForgeMod,
    defaultExtension: "jar",
  },
  LiteLoader: {
    id: Type.LiteLoader,
    defaultExtension: "jar",
  },
  LiteMod: {
    id: Type.LiteMod,
    defaultExtension: "litemod",
  },
  File: {
    id: Type.File,
  },
  VersionManifest: {
    id: Type.VersionManifest,
    defaultExtension: "json",
  },
};
